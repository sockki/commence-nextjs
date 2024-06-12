"use client"

import youtubeSmallMark from "@/assets/icons/youtube-smallMark.svg"
import instagramSmallMark from "@/assets/icons/instagram-smallMark.svg";
import Image from "next/image";

function FooterLinks() {
  const youtubeURL = "https://www.youtube.com/@commence-sw6xo";
  const instaURL = "https://www.instagram.com/commence_official/";
  const GotoOuterLink = (url: string) => {
    window.open(url);
  };
  return (
    <div className="flex flex-col space-y-[0.2rem] pl-[3.7rem] mt-[2rem]">
      <span className="font-AppleSDGothicNeoM00  max-[450px]:text-[120%]  text-[130%] ">
        COMMENCE SNS
      </span>
      <div className="flex items-center cursor-pointer">
        <Image
          src={youtubeSmallMark}
          alt="youtube-smallMark"
          className="-ml-[0.3rem] w-[5.1%] h-[4%]"
        />
        <span
          className="font-AppleSDGothicNeoM00 text-[0.7rem] -mt-[0.15rem] -ml-[0.4%]"
          onClick={() => GotoOuterLink(youtubeURL)}
        >
          YOUTUBE
        </span>
      </div>
      <div className="flex items-center cursor-pointer">
        <Image
          src={instagramSmallMark}
          alt="instagram-smallMark"
          className=" w-[3.5%] h-[5%]"
        />
        <span
          className="font-AppleSDGothicNeoM00 text-[0.7rem] ml-[0.5%]"
          onClick={() => GotoOuterLink(instaURL)}
        >
          Instagram
        </span>
      </div>
    </div>
  );
}
export default FooterLinks;
