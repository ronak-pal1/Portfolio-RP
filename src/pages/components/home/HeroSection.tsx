import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CanvasSquareEffect from "../../../components/CanvasSquareEffect";
import CustomButton from "../../../components/CustomButton";
import SocialButton from "../../../components/SocialButton";
import TransportationRow from "../../../components/TransportationRow";
import { IoIosArrowRoundDown } from "react-icons/io";
import ImageGridWave from "../../../components/ImageGridWave";
import profileImg from "../../../assets/image.png";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-center justify-center h-screen mt-2">
        <div className="w-[90%] mb-2 custom-border-t"></div>
        <div className="w-[90%] custom-border-x h-full border-dashed flex flex-col flex-1 px-2 pb-2">
          <div className="flex-[0.7] custom-border-b pb-2 w-full h-full flex">
            <div className="flex-[0.5] flex flex-col w-full h-full custom-border-r">
              <div className="flex-[0.75] custom-border-b mr-2  px-4 pt-4">
                <div className="flex items-end justify-between ">
                  <p className="font-mono text-[11px] text-slate-700">
                    {">> system.init"}
                  </p>

                  <p className="font-mono text-4xl text-[#787878]">[0]</p>
                </div>

                <div>
                  <div className="flex flex-col font-poppins font-extrabold text-3xl mt-5 space-y-1">
                    <p className="">Hello, I'm</p>
                    <p className="text-primary">Ronak Paul</p>
                  </div>

                  <div className="flex space-x-3 font-body text-sm font-light mt-3">
                    <p>Full Stack Engineer</p>
                    <p>|</p>
                    <p className="">
                      <span className="font-mono font-extralight">
                        22.62627
                      </span>{" "}
                      <span className="text-xs ml-2">on earth</span>
                    </p>
                  </div>

                  <p className="font-body text-xs font-extralight mt-5 leading-relaxed">
                    Most people use the tool. I want to know why the tool works.
                    I write code, break things intentionally, understand why
                    they broke, then build something better. I move across the
                    stack; frontend polish, backend plumbing, cloud infra,
                    databases, DevOps; wherever the interesting problem lives.
                    backend plumbing, cloud infra, databases, DevOps; wherever
                    the interesting problem lives.
                  </p>

                  <div className="flex items-center space-x-6 mt-6">
                    <CustomButton text="View Resume" isBoxed={true} />
                    <CustomButton
                      text="Schedule a meet"
                      isBoxed={true}
                      color="blue"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-[0.25] ">
                <div className="px-4 pt-4">
                  <p className="font-mono text-[10px] text-slate-700">
                    {"> social.links"}
                  </p>

                  <div className="flex items-center space-x-2 gap-y-3 mt-3 flex-wrap">
                    <SocialButton title="Linkedin" Icon={FaLinkedin} />
                    <SocialButton title="Twitter" Icon={FaTwitter} />
                    <SocialButton title="Github" Icon={FaGithub} />
                    <SocialButton title="Instagram" Icon={FaInstagram} />
                    <SocialButton title="Youtube" Icon={FaYoutube} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[0.5] w-full h-full relative flex items-center justify-center">
              <ImageGridWave src={profileImg} width={450} height={450} />

              <CanvasSquareEffect />
            </div>
          </div>

          <div className="flex-[0.3] flex flex-col w-full h-full">
            <div
              className="flex-[0.45] custom-border-b flex items-center
              "
            >
              <TransportationRow />
            </div>

            <div className="flex-[0.55] relative w-full h-full">
              <div className="w-full h-full flex flex-col items-center justify-center space-y-5">
                <div className="w-10 h-10 backdrop-blur-xs border-[0.8px] border-[#121212] flex items-center justify-center">
                  <IoIosArrowRoundDown className="text-xl" />
                </div>

                <p className="font-mono text-xs text-[#121212]/70">
                  011001 101101 1010111
                </p>
              </div>

              <CanvasSquareEffect />
            </div>
          </div>
        </div>
        <div className="w-[90%] mt-2 custom-border-t"></div>
      </div>
    </div>
  );
};

export default HeroSection;
