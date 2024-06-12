"use client"

import { SvgName } from "@/data/OuterLinkBoxData";
import Image from "next/image";

interface MainProps {
  link: string;
  title: string;
  svg: string;
  src: string;
  alt: string;
}

function OuterLinkBox({ link, title, svg, src, alt }: MainProps) {
  const onClick = () => {
    window.open(link);
  };
  return (
    <div
      className="relative w-full h-[6.1rem] bg-[#727272] rounded-[0.5rem] shadow-[0.2rem_0.4rem_0.6rem_0_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer transition-all hover:-translate-y-[0.2rem] hover:shadow-[0.4rem_0.6rem_0.6rem_0_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      <div className="flex justify-center items-center space-x-[1.06rem]">
        <div
          className={
            svg === SvgName.COMMENCE ? "-mr-[0.9rem] -ml-[0.5rem]" : ""
          }
        >
          <Image src={src} alt={alt} />
        </div>
        <div className="flex flex-col space-y-[-0.3rem] mt-[0.2rem]">
          <span className="font-AppleSDGothicNeoH00 text-[1rem] text-white">
            {title}
          </span>
          <span className="font-AppleSDGothicNeoL00 text-[0.8rem] text-white">
            바로가기
          </span>
        </div>
      </div>
    </div>
  );
}

export default OuterLinkBox;
