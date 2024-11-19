import {CollersNavbar} from "../../components";
import {BestOfSection, CarouselSection, HeroSection, JoinUsSection} from "../../sections";
import CollersFooter from "../../components/collers/footer/CollersFooter.tsx";
import GrowYourCollection from "../../sections/collers/grow-your-collection/GrowYourCollection.tsx";

export default function CollersPage() {
    return (
        <>
            <CollersNavbar/>
            <HeroSection/>
            <BestOfSection/>
            <JoinUsSection/>
            <CarouselSection/>
            <GrowYourCollection />
            <CollersFooter/>
        </>
    );
}
