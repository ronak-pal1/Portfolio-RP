import SectionHeading from "../../../components/SectionHeading";

import React, { useLayoutEffect, useRef, useState, useCallback } from "react";

export interface Experience {
  id: string | number;
  title: string;
  subtitle?: string;
  period?: string;
  location?: string;
  points?: string[];
  image?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const DROP = 32; // vertical drop from card before turning toward the center line

const Card: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="min-w-112.5  h-fit bg-white border border-black/10 p-4 text-[10px] font-mono text-[#121212]/80">
    <div className="mb-3">
      <div className="flex items-center space-x-4">
        {exp.image && (
          <img
            src={exp.image}
            alt={exp.title}
            className="h-7 w-7 object-contain"
          />
        )}

        <h3 className="text-sm font-medium text-gray-900">{exp.title}</h3>
      </div>
    </div>

    <div className="flex items-center space-x-2 mb-4">
      {exp.subtitle && <p className="text-xs text-gray-500">{exp.subtitle}</p>}
      {exp.period && <p className="text-xs text-gray-400">({exp.period})</p>}
    </div>

    <div className="ml-2">
      <ul className="list-disc">
        {exp?.points?.length != 0 &&
          exp?.points?.map((point, index) => (
            <li className="text-[10px] text-gray-600">{point}</li>
          ))}
      </ul>
    </div>
  </div>
);

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  ctaLabel = "View more",
  onCtaClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [lineBottom, setLineBottom] = useState(0);

  const recalc = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;

    const nextPaths: string[] = [];
    let maxBottom = 0;

    experiences.forEach((_, i) => {
      const card = cardRefs.current[i];
      if (!card) return;
      const isLeft = i % 2 === 0;
      const rect = card.getBoundingClientRect();

      const x = isLeft
        ? rect.right - containerRect.left - centerX / 2
        : rect.left - containerRect.left + centerX / 2;
      const yTop = rect.bottom - containerRect.top;
      const yTurn = yTop + DROP;

      // vertical drop from card edge, then horizontal to the center line
      nextPaths.push(`M ${x} ${yTop} L ${x} ${yTurn} L ${centerX} ${yTurn}`);
      maxBottom = Math.max(maxBottom, yTurn);
    });

    setPaths(nextPaths);
    setLineBottom(maxBottom);
  }, [experiences]);

  useLayoutEffect(() => {
    recalc();
    const ro = new ResizeObserver(() => recalc());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, [recalc]);

  return (
    <div className="mx-auto max-w-6xl py-12">
      <div ref={containerRef} className="relative flex flex-col gap-24">
        <svg className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible">
          {/* center vertical line, stops exactly where the last connector merges */}
          <line
            x1="50%"
            y1={0}
            x2="50%"
            y2={lineBottom}
            stroke="#0000004D"
            strokeDasharray="3 3"
            className="text-gray-400"
          />
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#0000004D"
              strokeDasharray="3 3"
              className="text-gray-400"
            />
          ))}
        </svg>

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={exp.id}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={isLeft ? "pr-8" : "pl-8"}
              >
                <Card exp={exp} />
              </div>
            </div>
          );
        })}
      </div>

      {/* rendered after the timeline in normal flow, so it can never overlap the line */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={onCtaClick}
          className="bg-primary px-8 py-3 text-white font-mono font-light text-xs transition-colors cursor-pointer"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center h-fit mt-2">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-full border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="w-full h-full p-4">
            <SectionHeading
              heading="Experiences"
              slug="past.experiences"
              count={1}
            />

            <ExperienceTimeline
              experiences={[
                {
                  id: 1,
                  title: "SDE Intern",
                  subtitle: "Periskope",
                  period: "2021-2023",
                  image:
                    "https://cdn.brandfetch.io/iduaB7NP2J/w/512/h/512/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
                  points: [
                    "Developed TS package for their ecosystem",
                    "Developed TS package for their ecosystem",
                    "Developed TS package for their ecosystem",
                    "Developed TS package for their ecosystem",
                  ],
                  location: "California, USA",
                },
                {
                  id: 2,
                  title: "Backend Engineer",
                  subtitle: "Company B",
                  period: "2019-2021",
                },
                {
                  id: 3,
                  title: "Backend Engineer",
                  subtitle: "Company B",
                  period: "2019-2021",
                },
                {
                  id: 4,
                  title: "Backend Engineer",
                  subtitle: "Company B",
                  period: "2019-2021",
                },
              ]}
              ctaLabel="View All"
            />
          </div>
        </div>
        <div className="w-[90%] mb-2 custom-border-t"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
