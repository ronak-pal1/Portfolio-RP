import CanvasSquareEffect from "../../../components/CanvasSquareEffect";
import SectionHeading from "../../../components/SectionHeading";

const ProjectCard = () => {
  const W = 400;
  const H = 500;
  const OUTER_R = 16;
  const INSET = 13;
  const INNER_R = OUTER_R - INSET;

  return (
    <div className="relative w-[400px] h-[500px]  border border-black/30 shrink-0">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
      >
        {/* inner rounded border */}
        <rect
          x={INSET + 0.5}
          y={INSET + 0.5}
          width={W - INSET * 2 - 1}
          height={H - INSET * 2 - 1}
          stroke="black"
          strokeOpacity={0.3}
        />
        {/* corner connectors: outer corner -> inner corner */}
        <line
          x1={0}
          y1={0}
          x2={INSET}
          y2={INSET}
          stroke="black"
          strokeOpacity={0.3}
        />
        <line
          x1={W}
          y1={0}
          x2={W - INSET}
          y2={INSET}
          stroke="black"
          strokeOpacity={0.3}
        />
        <line
          x1={0}
          y1={H}
          x2={INSET}
          y2={H - INSET}
          stroke="black"
          strokeOpacity={0.3}
        />
        <line
          x1={W}
          y1={H}
          x2={W - INSET}
          y2={H - INSET}
          stroke="black"
          strokeOpacity={0.3}
        />
      </svg>

      <div className="absolute inset-0 w-full h-full ">
        <div className="w-full h-full p-[13px] flex-1 flex flex-col">
          <div className="flex-[0.45] flex w-full h-full relative">
            <div className="w-full h-full">
              <CanvasSquareEffect />
            </div>
          </div>

          <div className="flex-[0.55] flex w-full h-full relative">
            <div className="w-full h-full px-4 py-4 space-y-5">
              <h3 className="text-lg font-mono text-[#121212]">
                Whatsapp Automation Agent
              </h3>

              <div className="space-y-4">
                <p className="font-mono text-[11px] text-slate-700">
                  {`// tech.stack`}
                </p>

                <div className="flex flex-wrap gap-3">
                  {new Array(5).fill(1).map((count, index) => (
                    <div key={index} className="w-9 h-9 custom-border"></div>
                  ))}
                </div>
              </div>


              <div className="flex flex-col space-y-3">
                <button className="bg-white border border-black/30 px-4 h-[40px] w-full text-xs font-mono text-black">
                   View Source Code
                </button>

                <button className="bg-primary  px-4 h-[40px] w-full text-xs font-mono text-white">
                    Live Preview
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center h-fit">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-full border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="w-full h-full p-4 space-y-8">
            <SectionHeading heading="Projects" slug="my.projects" count={3} />

            <div className="w-full space-y-6 flex flex-wrap gap-4">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>


            <div className="mt-[100px] flex justify-center">
              <button className="bg-primary  px-4 h-[40px] w-fit text-xs font-mono text-white px-8">
                View All Projects
             </button>
            </div>
          </div>
        </div>
        <div className="w-[90%] mb-2 custom-border-t mt-2"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
