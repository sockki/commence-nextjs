import commenceSmallMark from "@/assets/icons/commence-smallMark.svg";
import Image from "next/image";

function FooterTitle() {
  return (
    <div className="flex items-center pl-[2.1rem]">
      <Image src={commenceSmallMark} alt="commence-smallMark" className="w-[17%] h-auto"/>
      <div className="flex flex-col ml-[0.2rem]">
        <span className="font-AppleSDGothicNeoEB00 text-[1.7rem]">COMMENCE</span>
        <span className="font-AppleSDGothicNeoL00 text-[120%] -mt-[0.7rem]">
          est.1984
        </span>
      </div>
    </div>
  );
}
export default FooterTitle;
