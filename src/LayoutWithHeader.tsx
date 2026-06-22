import { Outlet } from "react-router-dom";
import Header from "./components/Header";

type LayoutWithHeaderProps = {
  setDark: (value: boolean) => void;
  currentMode: boolean;
};

const LayoutWithHeader = ({ setDark, currentMode }: LayoutWithHeaderProps) => {

  return (
    <>
      <Header setDark={setDark} currentMode={currentMode} />
      <Outlet />
    </>
  );
};

export default LayoutWithHeader;
