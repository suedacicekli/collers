import CollersNavbar from "../../components/navbar/CollersNavbar";
import CollectibleSneakers from "../../sections/header/CollectibleSneakers";
import HeaderFeatures from "../../sections/header/HeaderFeatures";

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
