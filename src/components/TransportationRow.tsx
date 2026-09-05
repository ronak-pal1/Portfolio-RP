import GetRequiredLogo from "./Logos";
import SlideAnimation from "./SlideAnimation";
import "./styles/Transportation.css";


const TransportationCard = ({
  title,
  logo,
  color,
}: {
  title: string;
  logo: string;
  color?: string;
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 w-50 h-12.5 border border-black/30 bg-[#e4e1e1]">
      {/* <GetRequiredLogo logoName={logo} size={30} color={color} /> */}
      <p className="font-mono font-normal text-base text-[#121212]/50">
        {title}
      </p> 
    </div>
  );
};


const TransportationRow = () => {
  return (
    <div className="w-full lg:h-14 h-10 flex flex-row items-center px-5 space-x-14 overflow-hidden [&>div]:shrink-0">
      <SlideAnimation>
        <TransportationCard title="React" logo="reactjs" />
        <TransportationCard title="Next" logo="nextjs" />
        <TransportationCard title="Tailwind CSS" logo="tailwindcss" />
        <TransportationCard title="Redux" logo="redux" />
        <TransportationCard title="Firebase" logo="firebase" />
        <TransportationCard title="Git" logo="git" />
        <TransportationCard title="HTML5" logo="html5" />
        <TransportationCard title="Java" logo="java" />
        <TransportationCard title="Material UI" logo="materialui" />
        <TransportationCard title="MongoDB" logo="mongodb" />
        <TransportationCard title="MySQL" logo="mysql" />
        <TransportationCard title="NodeJS" logo="nodejs" />
        <TransportationCard title="AWS" logo="aws" />
        <TransportationCard title="Python" logo="python" />
         <TransportationCard title="React" logo="reactjs" />
        <TransportationCard title="Next" logo="nextjs" />
        <TransportationCard title="Tailwind CSS" logo="tailwindcss" />
        <TransportationCard title="Redux" logo="redux" />
        <TransportationCard title="Firebase" logo="firebase" />
        <TransportationCard title="Git" logo="git" />
        <TransportationCard title="HTML5" logo="html5" />
        <TransportationCard title="Java" logo="java" />
        <TransportationCard title="Material UI" logo="materialui" />
        <TransportationCard title="MongoDB" logo="mongodb" />
        <TransportationCard title="MySQL" logo="mysql" />
        <TransportationCard title="NodeJS" logo="nodejs" />
        <TransportationCard title="AWS" logo="aws" />
        <TransportationCard title="Python" logo="python" />

         <TransportationCard title="React" logo="reactjs" />
        <TransportationCard title="Next" logo="nextjs" />
        <TransportationCard title="Tailwind CSS" logo="tailwindcss" />
        <TransportationCard title="Redux" logo="redux" />
        <TransportationCard title="Firebase" logo="firebase" />
        <TransportationCard title="Git" logo="git" />
        <TransportationCard title="HTML5" logo="html5" />
        <TransportationCard title="Java" logo="java" />
        <TransportationCard title="Material UI" logo="materialui" />
        <TransportationCard title="MongoDB" logo="mongodb" />
        <TransportationCard title="MySQL" logo="mysql" />
        <TransportationCard title="NodeJS" logo="nodejs" />
        <TransportationCard title="AWS" logo="aws" />
        <TransportationCard title="Python" logo="python" />
      </SlideAnimation>
    </div>
  );
};

export default TransportationRow;
