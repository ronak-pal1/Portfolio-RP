import RESUME_IMG from "../assets/resume.jpg";

const Resume = () => {
  return (
    <div className="mx-2 ">
      <img
        src={RESUME_IMG}
        alt="resume"
        className="w-full h-screen object-contain"
      />
    </div>
  );
};

export default Resume;
