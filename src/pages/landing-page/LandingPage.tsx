import Mockup1 from "../../assets/images/mockup1.png";
import Mockup2 from "../../assets/images/mockup2.png";


function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex gap-8">
        <a
          href="/quiz"
          className="transform transition duration-300 hover:scale-105"
        >
          <img
            src={Mockup1}
            alt="Mockup 1"
            className="filter grayscale hover:filter-none transition duration-300"
          />
        </a>
        <a
          href="/collers"
          className="transform transition duration-300 hover:scale-105"
        >
          <img
            src={Mockup2}
            alt="Mockup 2"
            className="filter grayscale hover:filter-none transition duration-300"
          />
        </a>
      </div>
    </div>
  );
}


export default LandingPage;
