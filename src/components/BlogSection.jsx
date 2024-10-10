import KeyboardIcon from "@mui/icons-material/Keyboard";

const BlogSection = () => {
  return (
    <div className="lg:mt-28 mt-5 py-10" id="skillsSection">
      <div className="flex flex-row items-center space-x-3 justify-center w-full mb-10">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Blogs
        </p>
        <KeyboardIcon fontSize="large" className="dark:text-white" />
      </div>

      <div></div>
    </div>
  );
};

export default BlogSection;
