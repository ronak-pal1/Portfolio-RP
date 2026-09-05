import SectionHeading from "../../../components/SectionHeading";


const BlogCard = () => {
    return (
        <div>
            
        </div>
    )
}

const BlogsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-full border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="w-full h-full p-4">
            <SectionHeading heading="Blogs" slug="my.blogs" count={4} />
          </div>
        </div>
        <div className="w-[90%] mb-2 custom-border-t mt-2"></div>
      </div>
    </section>
  );
};

export default BlogsSection;
