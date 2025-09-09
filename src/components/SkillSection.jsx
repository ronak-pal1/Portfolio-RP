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

      <div className="flex flex-row justify-center mt-5">
        <p className="text-sm text-neutral-500">Click on the icon to know it's name</p>
      </div>

      <div className="py-7 flex justify-center flex-wrap divide-y-2 divide-gray-100 dark:divide-gray-900">
        <SkillBox
          title="Frontend Skills"
          skills={[
            { skill: "html5", level: "99%", label: "HTML" },
            { skill: "css3", level: "90%", label: "CSS" },
            { skill: "reactjs", color: "#000eaa", level: "85%", label:"React.js" },
            { skill: "tailwindcss", level: "90%", label:"Tailwind CSS" },
            { skill: "nextjs", color: "#000", level: "75%", label: "Next.js" },
            { skill: "sass", level: "90%", label:"Syntactically Awesome Style Sheets (SASS)" },
            { skill: "materialui", level: "80%", label:"Material UI" },
            { skill: "styled-components", level: "90%", label:"Styled Components" },
            { skill: "redux", level: "75%", label:"Redux" },
          ]}
        />
        <SkillBox
          title="Backend Skills"
          skills={[
            { skill: "nodejs", level: "75%", label: "Node.js" },
            { skill: "expressjs", level: "80%", label: "Express.js" },
            { skill: "javascript", level: "85%", label:"Javascript"},
            { skill: "typescript", level: "90%", label:"Typescript" },
            { skill: "sanity", level: "65%", label:"Sanity" },
            { skill: "firebase", level: "75%", label:"Firebase" },
            { skill: "supabase", level: "75%", label:"Supabase" },
          ]}
        />
        <SkillBox
          title="Database"
          skills={[
            { skill: "mongodb", level: "75%", label:"MongoDB" },
            { skill: "mysql", level: "70%", label: "MySQL" },
            { skill: "postgressql", level: "70%", label:"PostgreSQL" },
            { skill: "redis", level: "60%", label:"Redis" },
          ]}
        />
        <SkillBox
          title="Languages"
          skills={[
            { skill: "java", level: "95%", label:"Java" },
            { skill: "c", level: "85%", label:"C" },
            { skill: "cpp", level: "90%", label:"C++" },
            { skill: "kotlin", level: "70%", label:"Kotlin" },
            { skill: "go", level: "40%", label:"Golang" },
            { skill: "python", level: "85%", label:"Python" },
            { skill: "rust", level: "40%", label:"Rust" },
          ]}
        />

        {/* <SkillBox
          title="AI/ML Skills"
          skills={[
            { skill: "langchain", level: "50%", label:"Langchain" },
          ]}
        /> */}

        <SkillBox
          title="Cloud Skills"
          skills={[
            { skill: "aws", level: "50%", label:"AWS" },
            { skill: "gcp", level: "40%", label:"GCP" },
          ]}
        />
        <SkillBox
          title="DevOps Skills"
          skills={[
            { skill: "git", level: "85%", label:"Git" },
            { skill: "github", level: "85%", label:"Github & Github Actions" },
            { skill: "docker", level: "55%", label:"Docker" },
            { skill: "linux", level: "75%", label:"Linux" },
            { skill: "kubernetes", level: "30%", label:"Kubernetes" },
          ]}
        />
      </div>
    </div>
  );
};

export default SkillSection;
