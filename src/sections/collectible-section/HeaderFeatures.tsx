import FeatureCard from "../../components/feature-card/FeatureCard";
import { features } from "../../constants/fetures";

function HeaderFeatures() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-case-yellow lg:bg-transparent gap-20 p-4 lg:p-20">
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
