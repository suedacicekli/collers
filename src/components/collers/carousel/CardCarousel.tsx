import { forwardRef } from "react";
import { cardsData } from "../../../constants/collers";

const CardCarousel = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto gap-4 scroll-smooth"
    >
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-md p-6 w-72 shrink-0"
        >
          <h3 className="text-lg font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <div className="flex items-center mt-4">
            <img
              src={card.userImage}
              alt={card.userName}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="font-medium">{card.userName}</p>
              <p className="text-sm text-gray-500">{card.userRole}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default CardCarousel;
