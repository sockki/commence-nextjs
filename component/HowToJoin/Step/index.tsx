import circle from "@/assets/icons/Circle.svg";
import Image from "next/image";

interface Props {
  content: string;
}

function Step({ content }: Props) {
  return (
    <div className="relative w-full flex justify-center items-center">
      <Image src={circle} alt="circle-icon" className="w-full h-full" />
      <span className="absolute text-center font-AppleSDGothicNeoN00 text-[1rem]">
        {content}
      </span>
    </div>
  );
}

export default Step;
