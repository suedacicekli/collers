import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { features } from "../../constants/fetures";

function HeaderFeatures() {
  return (
    <div className="flex  flex-wrap items-center justify-between bg-yellow-100 lg:bg-transparent gap-20 my-20">
      {features.map((feature, index) => (
        <div className="w-full lg:w-3/12" key={index}>
          <FeatureCard
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  );
}

export default HeaderFeatures;
