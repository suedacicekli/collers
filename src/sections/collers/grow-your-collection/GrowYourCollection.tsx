import React from "react";
import {growYourCollectionButtons, growYourCollectionImages} from "../../../constants/collers.ts";
import "./style.css";
import WordSvg from "../../../assets/collers-assets/images/world.svg";
import WorldImg from "../../../assets/collers-assets/images/world-img.png";
const Button = ({icon, text}: { icon: string; text: string }) => (
    <div className="flex items-center gap-3 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer">
        {icon.startsWith("fa-") ? (
            <i className={icon}></i>
        ) : (
            <img src={icon} alt={text} className="w-6 h-6"/>
        )}
        <p className="text-sm font-medium">{text}</p>
    </div>
);

const GrowYourCollection: React.FC = () => (
        <>
            <section className="py-12 relative">
                <div className="container mx-auto flex flex-col gap-8 items-center text-center md:items-start md:text-left">
                    <h2 className="text-3xl font-bold">Grow your collection</h2>
                    <p className="text-gray-600 max-w-2xl">
                        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque
                        sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus
                        tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                    </p>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-8">
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:flex-col md:w-1/4">
                        {growYourCollectionButtons.map((button, index) => (
                            <Button key={index} icon={button.icon} text={button.text}/>
                        ))}
                    </div>

                    {/* Images */}
                    <div className="flex flex-wrap gap-4 justify-center md:w-3/4">
                        {growYourCollectionImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto"/>
                        ))}
                    </div>
                </div>

                <div className="curly-brown"></div>
                <div className="curly-light-yellow"></div>
                <div className="curly-yellow"></div>

            </section>

            <section className="world-section flex justify-center items-center bg-amber-900 overflow-hidden w-full pb-5 ">
                <div className="container flex justify-center items-center relative">
                    <img className="world-img" src={WordSvg} alt="world-img"></img>
                    <div className="world-pin world-pin-l pin-1"></div>
                    <div className="world-pin world-pin-s pin-2"></div>
                    <div className="world-pin world-pin-l pin-3"></div>
                    <div className="world-pin world-pin-m pin-4"></div>
                    <div className="world-pin world-pin-s pin-5"></div>
                    <div className="world-pin world-pin-s pin-6"></div>
                    <div className="world-pin world-pin-s pin-7"></div>
                    <div className="world-pin world-pin-s pin-8"></div>
                    <div className="world-pin world-pin-s pin-9"></div>
                    <div className="world-pin world-pin-s pin-10"></div>
                    <div className="col-2">
                        <img src={WorldImg}/>
                    </div>
                    <div className="position-absolute pin-1-tooltip ">

                        <div className="tooltip-img main-section-screen3">

                            <div className="screen-card-wrap ">

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-extrabold text-2xl lg:text-6xl">
                        <p className="m-0">11,658,467</p>
                        <p className="m-0">Shoes Collected</p>
                    </div>
                </div>
            </section>
        </>

    )
;

export default GrowYourCollection;
