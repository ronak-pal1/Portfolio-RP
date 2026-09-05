import SectionHeading from "../../../components/SectionHeading";

const SkillCard = () => {
  return (
    <div className="w-full flex flex-1 h-62.5 custom-border py-2 bg-secondary">
      <div className="w-full flex flex-[0.3] custom-border-r p-4">
        <div className="w-full flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-mono font-light">Frontend</h3>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-between font-mono font-light text-sm mb-4">
              <p>//proficiency</p>

              <p>70%</p>
            </div>

            <div>
              <div className="w-full border-[0.5px] border-black/50 h-2.5">
                <div className="w-[70%] h-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-[0.7] p-4">
        <div className="flex  gap-x-4 gap-b-4 flex-wrap">
          {new Array(50).fill(1).map((count, index) => (
            <div key={index} className="w-10 h-10 custom-border"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-fit border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="w-full p-4 space-y-8">
            <SectionHeading heading="Skills" slug="my.skills" count={2} />

            <div className="w-full space-y-6">
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>
        </div>
        <div className="w-[90%] mb-2 custom-border-t"></div>
      </div>
    </section>
  );
};

export default SkillsSection;
