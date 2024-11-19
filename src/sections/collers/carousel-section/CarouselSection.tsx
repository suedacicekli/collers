import { useRef } from "react";
import CardCarousel from "../../../components/collers/carousel/CardCarousel";
import LeftIcon from "../../../assets/images/left.png";
import RightIcon from "../../../assets/images/right.png";


function CarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-yellow-50 py-12 px-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-center mb-8">
          Because they love us
        </h2>
        <div className="flex gap-6">
          <button
            className="w-8 h-8  rounded-full flex items-center justify-center  "
            onClick={scrollLeft}
          >
           <img src={LeftIcon} alt="" />
          </button>
          <button
            className="w-8 h-8  rounded-full flex items-center justify-center "
            onClick={scrollRight}
          >
            <img src={RightIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="p-10">
          <CardCarousel ref={carouselRef} />
        </div>
      </div>
    </div>
  );
}

export default CarouselSection;
