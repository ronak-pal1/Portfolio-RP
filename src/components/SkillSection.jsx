import { ElectricBolt } from "@mui/icons-material";
import SkillBox from "./SkillBox";

const SkillSection = () => {
  return (
    <div className="mt-28 py-10" id="skills">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Skills
        </p>
        <ElectricBolt fontSize="large" className="dark:text-white" />
      </div>

      <div className="py-7 flex justify-center flex-wrap divide-y-2 divide-gray-100 dark:divide-gray-900">
        <SkillBox
          title="Frontend Skills"
          skills={[
            { skill: "html5", level: "99%" },
            { skill: "css3", level: "90%" },
            { skill: "reactjs", color: "#000eaa", level: "85%" },
            { skill: "tailwindcss", level: "90%" },
            { skill: "nextjs", color: "#000", level: "75%" },
            { skill: "sass", level: "90%" },
            { skill: "materialui", level: "80%" },
            { skill: "styled-components", level: "90%" },
            { skill: "redux", level: "75%" },
          ]}
        />
        <SkillBox
          title="Backend Skills"
          skills={[
            { skill: "nodejs", level: "75%" },
            { skill: "expressjs", level: "80%" },
            { skill: "javascript", level: "85%" },
            { skill: "typescript", level: "90%" },
            { skill: "sanity", level: "65%" },
            { skill: "firebase", level: "75%" },
            { skill: "supabase", level: "75%" },
          ]}
        />
        <SkillBox
          title="Database"
          skills={[
            { skill: "mongodb", level: "75%" },
            { skill: "mysql", level: "85%" },
            { skill: "postgressql", level: "75%" },
          ]}
        />
        <SkillBox
          title="Languages"
          skills={[
            { skill: "java", level: "95%" },
            { skill: "c", level: "85%" },
            { skill: "cpp", level: "90%" },
            { skill: "kotlin", level: "70%" },
            { skill: "go", level: "40%" },
            { skill: "python", level: "85%" },
            { skill: "rust", level: "40%" },
          ]}
        />
        <SkillBox
          title="Cloud Skills"
          skills={[
            { skill: "aws", level: "50%" },
            { skill: "gcp", level: "40%" },
          ]}
        />
        <SkillBox
          title="DevOps Skills"
          skills={[
            { skill: "git", level: "85%" },
            { skill: "docker", level: "55%" },
            { skill: "linux", level: "75%" },
            { skill: "kubernetes", level: "30%" },
          ]}
        />
      </div>
    </div>
  );
};

export default SkillSection;
