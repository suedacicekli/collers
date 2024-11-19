import Viverra from "../assets/images/viverra.png";
import Amet from "../assets/images/amet.png";
import Fermentum from "../assets/images/fermentum.png";
import Product1 from "../assets/images/product1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.png";
import Profiles1 from "../assets/images/profile1.png";
import Profiles2 from "../assets/images/profile2.png";
import Profiles3 from "../assets/images/profile3.png";
import Profiles4 from "../assets/images/profile4.png";
import ShieldCheck from "../assets/collers-assets/icons/shield-check.png"
import Search from "../assets/collers-assets/icons/search.png"
import RocketIcon from "../assets/collers-assets/icons/rocket.png"
import Monitor from "../assets/collers-assets/icons/screen.png"
import Frequency from "../assets/collers-assets/icons/podcast.png"
import Setting from "../assets/collers-assets/icons/settings-alt.png"
import WindowsPic from "../assets/collers-assets/images/windows.png"

export const collers = [
    {
        image: Viverra,
        title: "Nibh viverra",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
        image: Amet,
        title: "Cursus amet",
        description:
            "Sit amet risus sed turpis gravida accumsan, sit amet dolor vitae velit euismod.",
    },
    {
        image: Fermentum,
        title: "Ipsum fermentum",
        description:
            "Turpis risus viverra, facilisis nec leo vitae pharetra. Nec tincidunt sed ipsum.",
    },
];

export const products = [
    {
        id: 1,
        title: "Stylish Shoes",
        description: "If a dog chews shoes whose shoes does he choose?",
        imageUrl: Product1,
    },
    {
        id: 2,
        title: "Elegant Jacket",
        description: "Stay stylish with this elegant jacket.",
        imageUrl: Product2,
    },
    {
        id: 3,
        title: "Trendy Bag",
        description: "Carry your essentials in style.",
        imageUrl: Product3,
    },
];


export const cardsData = [
    {
        id: 1,
        title: "Zoomerr",
        description:
            "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        userImage: Profiles1,
        userName: "Hellen Jummy",
        userRole: "Team Lead",
    },
    {
        id: 2,
        title: "SHELLS",
        description:
            "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        userImage: Profiles2,
        userName: "Hellena John",
        userRole: "Co-founder",
    },
    {
        id: 3,
        title: "ArtVenue",
        description:
            "A eget sed posuere dui risus habitasse mauris. Venentais aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        userImage: Profiles3,
        userName: "David Oshodi",
        userRole: "Manager",
    },
    {
        id: 4,
        title: "Winers",
        description:
            "Magna integritas nibh nisl risus, aenean scelerisque amet malesuada.",
        userImage: Profiles4,
        userName: "Jane Doe",
        userRole: "Designer",
    },
    {
        id: 5,
        title: "Winers",
        description:
            "Magna integritas nibh nisl risus, aenean scelerisque amet malesuada.",
        userImage: Profiles4,
        userName: "Jane Doe",
        userRole: "Designer",
    },
];

export const growYourCollectionButtons = [
    {icon: Search, text: "Bibendum tellus"},
    {icon: ShieldCheck, text: "Cras eget"},
    {icon: RocketIcon, text: "Dolor pharetra"},
    {icon: Monitor, text: "Amet, fringilla"},
    {icon: Frequency, text: "Amet nibh"},
    {icon: Setting, text: "Sed velit"},
];

export const growYourCollectionImages = [
    {src: WindowsPic, alt: "Video Image", position: "absolute top-0 left-0 w-3/4"},
];


