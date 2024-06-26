import { CategoryBoxData } from "@/data/CategoryBoxData";
import CategoryBox from "../CategoryBox";





function CategoryBoxContainer() {
  return (
    <div className="mt-[2.1rem] mx-[4.82%] grid grid-cols-2  grid-rows-2 gap-y-[1.8rem] gap-x-[4%] items-center justify-items-center">
      {CategoryBoxData.map((box) => (
        <CategoryBox key={box.id} link={box.link} title={box.title} bottomText={box.bottomText} />
      ))}
    </div>
  );
}

export default CategoryBoxContainer;
