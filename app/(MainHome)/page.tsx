import CategoryBoxContainer from "@/component/MainHome/CategoryBoxContainer";
import JoinUsButton from "@/component/MainHome/JoinUsButton";
import MovingBanner from "@/component/MainHome/MovingBanner";
import OuterLinksContainer from "@/component/MainHome/OuterLinksContainer";
import SlideBanner from "@/component/MainHome/SlideBanner";
const MainHome = () => {
  return (
    <div className="flex flex-col w-full">
      <SlideBanner/>
      <MovingBanner/>
      <CategoryBoxContainer/>
      <OuterLinksContainer/>
      <JoinUsButton/>
    </div>
  );
};

export default MainHome;
