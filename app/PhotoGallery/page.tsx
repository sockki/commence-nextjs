import PhotoLine from "@/component/PhotoGallery/PhotoLine";
import ThisYear from "@/component/PhotoGallery/ThisYear";
import PhotoItems from "@/component/PhotoGallery/PhotoItems";
import CommenceMark from "@/component/PhotoGallery/CommenceMark";
import Comment from "@/component/PhotoGallery/Comment";

function PhotoGallery() {
  return (
    <div className="pt-[4rem] flex flex-col items-center">
      <ThisYear />
      <div className="mt-[184px] relative">
        <PhotoLine />
        <div className="absolute top-[-84.5px] left-[-74px]">
          <PhotoItems />
        </div>
      </div>
      <div className="mt-[34.5px] mb-[28px] relative">
        <CommenceMark />
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;