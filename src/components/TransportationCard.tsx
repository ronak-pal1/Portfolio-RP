import GetRequiredLogo from "./Logos";

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
    <div className="flex items-center space-x-2 w-fit">
      <GetRequiredLogo logoName={logo} size={30} color={color} />
      <p className="text-slate-100 font-poppins font-bold lg:text-base text-sm">
        {title}
      </p>
    </div>
  );
};

export default TransportationCard;
