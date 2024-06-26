"use client";

import { useRouter } from "next/navigation";
import mainhomeArrowIcon from "@/assets/icons/mainhome-arrow-icon.svg";
import Image from "next/image";

interface MainProps {
  title: string;
  bottomText: string;
  link: string;
}

function CategoryBox({ link, title, bottomText }: MainProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(link);
  };
  return (
    <div
      className="w-full h-[9.2rem] bg-white rounded-[1rem] shadow-[0.2rem_0.4rem_0.6rem_0_rgba(0,0,0,0.25)] pl-[4.5%] pt-[0.7rem] flex flex-col justify-center cursor-pointer transition-all hover:-translate-y-[0.2rem] hover:shadow-[0.4rem_0.6rem_0.6rem_0_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-[-0.7rem]">
        <span className="font-AppleSDGothicNeoH00 text-[1.5rem]">{title}</span>
      </div>
      <div className="mb-[0.2rem] flex justify-between">
        <span className="font-AppleSDGothicNeoL00 text-[1.2rem]">
          {bottomText}
        </span>
        <span className="flex justify-center items-center mr-[0.7rem]">
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-black flex justify-center items-center">
            <Image
              src={mainhomeArrowIcon}
              alt="mainhome-arrow-icon"
              className="ml-[0.1rem]"
              width="8"
              height="10"
            />
          </div>
        </span>
      </div>
    </div>
  );
}

export default CategoryBox;
