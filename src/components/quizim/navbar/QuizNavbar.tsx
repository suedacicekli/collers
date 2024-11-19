import QuizimLogo from "../../../assets/quiz-assets/images/quizim-logo.png";

function QuizNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center w-full">
        <img
          src={QuizimLogo}
          alt="quizim-logo"
          className="h-12 object-contain"
        />
      </div>
    </div>
  );
}

export default QuizNavbar;
