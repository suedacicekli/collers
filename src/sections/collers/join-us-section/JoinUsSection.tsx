import CheckIcon from "../../../assets/icons/check.png";
import WhyJoinUs from "../../../assets/images/whyJoinUs.png";

function JoinUsSection() {
  return (
    <div className="bg-base-100 lg:bg-case-yellow px-2 lg:px-20 py-4 lg:py-40">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-xl bg-white p-2 lg:p-20">
       
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center lg:text-start">
            Why join us{" "}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-blue-500">
                <img src={CheckIcon} alt="check-icon" />
              </div>
              <p className="text-gray-700">
                Est et in pharetra magna adipiscing ornare aliquam.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue-500">
                <img src={CheckIcon} alt="check-icon" />
              </div>
              <p className="text-gray-700">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue-500">
                <img src={CheckIcon} alt="check-icon" />
              </div>
              <p className="text-gray-700">
                Ullamcorper ornare in et egestas dolor orci.
              </p>
            </div>
          </div>
          <a className="btn btn-dark btn-outline text-amber-900 hover:btn-outline w-44">
            Sign Up Now
          </a>
        </div>

        <div className="w-full lg:w-1/2 mt-8 flex justify-center relative">
          <div className="lg:absolute w-[110%] lg:w-[130%]left lg:-top-32 right-0 left-1">
            <img src={WhyJoinUs} alt="Join Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsSection;
