interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="col-span-12 lg:col-span-4 text-start">
      <img src={image} alt={title} />
      <p className="font-bold text-xl my-4 text-collers-dark">{title}</p>
      <p className="text-lg text-ellipsis whitespace-normal text-collers-dark">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
