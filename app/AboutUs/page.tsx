import Awards from "@/component/AboutUs/Awards";
import HugeCommenceMark from "@/component/AboutUs/HugeCommenceMark";
import IntroduceText from "@/component/AboutUs/IntroduceText";
import MainPerformances from "@/component/AboutUs/MainPerformances";

function AboutUs() {
    return <div className="flex flex-col">
        <HugeCommenceMark/>
        <IntroduceText/>
        <MainPerformances/>
        <Awards/>
    </div>
}

export default AboutUs; 