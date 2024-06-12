import Title from "@/component/Common/Title";
import ApplyButton from "@/component/HowToJoin/ApplyButton";
import AuditionProcedure from "@/component/HowToJoin/AuditionProcedure";
import AuditionTip from "@/component/HowToJoin/AuditionTip";
import Comment from "@/component/HowToJoin/Comment";
import CommonExplainations from "@/component/HowToJoin/CommonExplainations";
import FirstAuditionExplaination from "@/component/HowToJoin/FirstAuditionExplaination";
import PositionExplainations from "@/component/HowToJoin/PositionExplainations";
import SecondAuditionExplaination from "@/component/HowToJoin/SecondAuditionExplaination";

function HowToJoin() {
  return (
    <div className="pt-[4rem] mb-[7.1rem] flex flex-col justify-center items-center mx-[2.595rem]">
      <Title content="Join To COMMENCE" />
      <div className="mt-[5.7rem]">
        <CommonExplainations />
        <div className="mt-[1.5rem]" />
        <PositionExplainations />
      </div>
      <div className="mt-[4.867rem]" />
      <AuditionProcedure />
      <div className="mt-[4.983rem]" />
      <FirstAuditionExplaination />
      <div className="mt-[5.099rem]" />
      <SecondAuditionExplaination />
      <div className="mt-[3.467rem]" />
      <AuditionTip />
      <div className="mt-[3.209rem]" />
      <Comment />
      <div className="mt-[1.7rem]" />
      <ApplyButton />
    </div>
  );
}

export default HowToJoin;
