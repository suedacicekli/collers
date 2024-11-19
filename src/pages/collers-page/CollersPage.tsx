import {CollersNavbar} from "../../components";
import {BestOfSection, CarouselSection, HeroSection, JoinUsSection} from "../../sections";
import CollersFooter from "../../components/collers/footer/CollersFooter.tsx";

export default function CollersPage() {
    return (
        <>
            <CollersNavbar/>
            <HeroSection/>
            <BestOfSection/>
            <JoinUsSection/>
            <CarouselSection/>
            <CollersFooter/>
        </>
    );
}
