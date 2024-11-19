import {CollersNavbar} from "../../components";
import {BestOfSection, HeroSection, JoinUsSection} from "../../sections";
import CollersFooter from "../../components/collers/footer/CollersFooter.tsx";

export default function CollersPage() {
    return (
        <>
            <CollersNavbar/>
            <HeroSection/>
            <BestOfSection/>
            <JoinUsSection/>
            <CollersFooter/>
        </>
    );
}
