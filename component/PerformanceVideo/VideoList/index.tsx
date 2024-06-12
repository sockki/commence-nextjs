import { PerformanceVideoData } from "@/data/PerformanceVideoData";
import VideoItem from "../VideoItem";

function VideoList() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-[1.172rem] gap-y-[0.8rem]">
      {PerformanceVideoData.map((video, index) => (
        <VideoItem
          key={index}
          imgSrc={video.imgSrc}
          alt={video.alt}
          youtubeUrl={video.youtubeUrl}
          genre={video.genre}
          title={video.title}
          singer={video.singer}
        />
      ))}
    </div>
  );
}

export default VideoList;
