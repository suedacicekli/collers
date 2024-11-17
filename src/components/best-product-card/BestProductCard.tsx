import React from "react";
import { BestProductCardProps } from "../../types/Types";

const BestProductCard: React.FC<BestProductCardProps> = ({
  title,
  description,
  imageUrl,
  onBuyNow,
}) => {
  return (
    <div className="card bg-case-dark-blue text-white w-full shadow-combined">
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="my-4">{description}</p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-base-100 btn-outline w-full text-base-100 flex items-center justify-center gap-2"
            onClick={onBuyNow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 9a1 1 0 100 2 1 1 0 000-2z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM10 5a5 5 0 100 10A5 5 0 0010 5z"
                clipRule="evenodd"
              />
            </svg>
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
