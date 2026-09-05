const CustomButton = ({
  text,
  width = "180px",
  height = "40px",
  color = "white",
  isBoxed = false,
}: {
  text: string;
  width?: string;
  height?: string;
  color?: "white" | "blue";
  isBoxed?: boolean;
}) => {
  return (
    <button
      className={` ${color == "white" ? "border border-black/30 bg-white" : "bg-primary text-white/90"}  text-xs font-mono font-light flex items-center ${isBoxed?"justify-between":" justify-center"}  px-3`}
      style={{
        width,
        height,
      }}
    >
      <p>{text}</p>

      {isBoxed && (
        <div className={`w-4.5 h-4.5 border  ${color == "white"?"border-black/30":"border-white/70"}`}></div>
      )}
    </button>
  );
};

export default CustomButton;
