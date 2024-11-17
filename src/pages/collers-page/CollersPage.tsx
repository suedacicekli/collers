import CollersNavbar from "../../components/navbar/CollersNavbar";
import BestOfSection from "../../sections/best-of-section/BestOfSection";
import CollectibleSneakers from "../../sections/collectible-section/CollectibleSneakers";
import HeaderFeatures from "../../sections/collectible-section/HeaderFeatures";
import JoinUsSection from "../../sections/join-us-section/JoinUsSection";

export default function CollersPage() {
  return (
    <>
      <CollersNavbar />
      <CollectibleSneakers />
      <HeaderFeatures />
      <BestOfSection />
      <JoinUsSection />
    </>
  );
}
