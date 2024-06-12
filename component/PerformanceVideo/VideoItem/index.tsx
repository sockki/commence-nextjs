"use client";

import playIcon from "@/assets/icons/play-icon.svg";
import Image from "next/image";

interface MainProps {
  imgSrc: string;
  alt: string;
  youtubeUrl: string;
  genre: string;
  title: string;
  singer: string;
}


function VideoItem({ imgSrc,alt,youtubeUrl,genre,title,singer }: MainProps) {

  const onClick = () => {
    window.open(youtubeUrl);
  };

  return (
    <div className="w-full max-w-[17.5rem]">
      <div onClick={onClick} className="relative pb-[55%] cursor-pointer">
        <img
          src={imgSrc}
          alt={alt}
          className="absolute w-full h-full rounded-[14px] object-cover shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] "
        />
        <Image
          src={playIcon}
          alt="재생 버튼"
          className="absolute bottom-[0.656rem] right-[0.843rem]"
        />
      </div>
      <div className="mt-[1rem] flex gap-[0.7rem] items-center">
      <div className="w-[6.623rem] h-[2.268rem] bg-white ml-[1.4rem]  rounded-[1.5rem] flex justify-center items-center shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)] ">
        <span className="font-AppleSDGothicNeoB00 text-[1.2rem] leading-[100%] tracking-[-1%]">
          #{genre}
        </span>
      </div>
      <div>
        <p className="font-AppleSDGothicNeoM00 text-[1.2rem] leading-_normal tracking-[-1%]">
          {title}
        </p>
        <p className="font-AppleSDGothicNeoL00 text-[0.9rem] leading-_normal tracking-[-1%]">
          {singer}
        </p>
      </div>
    </div>
    </div>
  );
}

export default VideoItem




