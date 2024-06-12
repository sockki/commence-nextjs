import awardsLine from "@/assets/icons/awards-line.svg";
import smallDat from "@/assets/icons/small-dat.svg";
import Image from "next/image";

function AwardsLine() {
  return (
    <div className="absolute left-[0.7rem] top-[0] ">
      <Image src={awardsLine} alt="awardsLine" />
      <Image className="-ml-[0.255rem] mt-[1rem]" src={smallDat} alt="smallDat" />
      <Image
        className="-ml-[0.255rem] -mt-[0.3rem]"
        src={smallDat}
        alt="smallDat"
      />
      <Image
        className="-ml-[0.255rem] -mt-[0.3rem]"
        src={smallDat}
        alt="smallDat"
      />
    </div>
  );
}

export default AwardsLine;
