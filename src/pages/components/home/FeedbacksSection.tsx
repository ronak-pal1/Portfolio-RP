import SectionHeading from "../../../components/SectionHeading";

const FeedbacksSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-full border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="w-full h-full p-4">
            <SectionHeading heading="Feedbacks" slug="my.feedbacks" count={5} />
          </div>
        </div>
        <div className="w-[90%] mb-2 custom-border-t"></div>
      </div>
    </section>
  );
};

export default FeedbacksSection;
