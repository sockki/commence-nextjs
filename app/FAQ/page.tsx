import FaqContainer from "@/component/FAQ/FaqContainer";
import TitleText from "@/component/FAQ/TitleText";

function FAQ() {
  return (
    <div className="flex flex-col">
      <TitleText />
      <FaqContainer />
    </div>
  );
}

export default FAQ;
