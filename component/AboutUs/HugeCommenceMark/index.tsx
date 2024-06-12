import hugeCommenceMark from "@/assets/icons/huge-commence-mark.svg";
import Image from "next/image";

function HugeCommenceMark() {
  return (
    <div className="flex flex-col items-center">
      <Image className="mt-[2.5rem]" src={hugeCommenceMark} alt="hugeCommenceMark"/>
    </div>
  );
}

export default HugeCommenceMark;
