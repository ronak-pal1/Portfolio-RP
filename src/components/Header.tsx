import { IoMoon, IoSunny } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { GoCommandPalette } from "react-icons/go";

type HeaderProps = {
  setDark: (value: boolean) => void;
  currentMode: boolean;
};

const Header = ({ setDark, currentMode }: HeaderProps) => {
  const changeMode = () => {
    setDark(!currentMode);
  };

  const navigate = useNavigate();

  return (
    <header className="w-full flex flex-col justify-center items-center h-15 pt-3">
      <div className="w-[90%] border-x border-x-[#121212]/70 border-dashed h-full px-4 flex items-center justify-between">

        <p className="font-mono font-normal">Ronak Paul</p>


        <div className="flex items-center space-x-8 font-mono text-xs text-[#121212]/70">
          <p>Skills</p>
          <p>Experience</p>
          <p>Projects</p>
          <p>Blogs</p>
          <p>Feedbacks</p>
        </div>


        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary border border-black/20 flex items-center justify-center text-[#121212]/80">
          <GoCommandPalette />
          </div>
          <CustomButton text="Connect now" color="blue" width="150px"/>
           <div className="w-10 h-10 bg-secondary border border-black/20 flex items-center justify-center text-[#121212]/80">
           <IoMoon />
          </div>
        </div>

      
      </div>

      <div className="w-[90%] mt-2 border-b border-b-[#121212] border-dashed"></div>
    </header>
  );
};

export default Header;
