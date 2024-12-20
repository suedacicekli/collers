import PlayCircleIcon from "../../../assets/icons/play-circle.png";
import Sneakers from "../../../assets/images/sneakers.png";
import './style.css'
import {FeatureCard} from "../../../components";
import {collers} from "../../../constants/collers.ts";

function HeroSection() {
    return (
        <div className="hero-section relative">
            <div className="flex flex-col md:flex-row items-center gap-8 m-20">
                <div className="flex-1 ">
                    <h1 className="text-7xl font-bold text-case-dark-blue mb-4">
                        Collectible Sneakers
                    </h1>
                    <p className="text-lg text-gray-600 mb-6 text-case-dark-blue">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
                        amet.
                    </p>
                    <div className="flex space-x-4">
                        <a className="btn btn-dark btn-outline text-amber-900">Sign Up Now</a>

                        <div className="flex items-center space-x-2">
                            <img
                                src={PlayCircleIcon}
                                alt="play-circle-icon"
                                className="h-auto w-auto"
                            />
                            <a className="text-amber-900">Sign Up Now</a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12">
                    <img
                        src={Sneakers}
                        alt="Collectible Sneakers"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <div
                className="flex flex-wrap items-center justify-between lg:bg-transparent gap-20 p-4 lg:p-20">
                {collers.map((feature, index) => (
                    <div className="w-full lg:w-3/12" key={index}>
                        <FeatureCard
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroSection;
