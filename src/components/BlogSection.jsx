import { Edit } from "@mui/icons-material";

const BlogSection = () => {
  return (
    <div className="mt-28 py-10" id="skillsSection">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="text-3xl font-poppins font-semibold text-black">Blogs</p>
        <Edit fontSize="large" />
      </div>
    </div>
  );
};

export default BlogSection;
