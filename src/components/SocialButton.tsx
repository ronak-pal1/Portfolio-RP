import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";




const SocialButton = ({title, Icon}:{title:string, Icon: IconType}) => {
    return (
        <button className="w-35 h-7.5 bg-white border border-black/30 px-2 text-[10px] font-mono flex justify-between items-center text-[#121212]/80">

            <p>{title}</p>


            <Icon className="text-sm"/>

        </button>
    )
}


export default SocialButton;