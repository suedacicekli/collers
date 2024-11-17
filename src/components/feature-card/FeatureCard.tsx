import { FeatureCardProps } from "../../types/Types";

function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col col-span-12 lg:col-span-4 text-center lg:text-start items-center lg:items-start">
      <img src={image} alt={title} />
      <p className="font-bold text-xl my-4 text-case-dark-blue">{title}</p>
      <p className="text-lg text-ellipsis whitespace-normal text-case-dark-blue">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
