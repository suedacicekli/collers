import CollersNavbar from "../../components/navbar/CollersNavbar";
import CollectibleSneakers from "../../sections/collectible-section/CollectibleSneakers";
import HeaderFeatures from "../../sections/collectible-section/HeaderFeatures";


function CollersPage() {
  return (
    <>
      <div className="relative lg:mx-20">
        <CollersNavbar />
        <CollectibleSneakers />
        <HeaderFeatures />
      </div>
    </>
  );
}

export default CollersPage;
