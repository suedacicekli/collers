import { QUESTIONS_SIZE } from "../../../constants/quizim.ts";
import useExamStore from "../../../store/quizimStore.ts";

function AnswersResults() {
    const { answers } = useExamStore();
    const options = ["A", "B", "C", "D"]; // Şıklar

    return (
        <div className="flex flex-col space-y-4">
            {[...Array(QUESTIONS_SIZE)].map((_, questionIndex) => {
                const questionNumber = questionIndex + 1; // Soru numarası
                const selectedAnswer = answers[questionNumber] || ""; // Seçilen cevap

                return (
                    <div
                        key={questionNumber}
                        className="flex items-center space-x-4"
                    >
                        <p className="text-lg font-bold">{questionNumber}-</p>
                        <div className="flex space-x-2">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ${
                                        selectedAnswer === option
                                            ? "bg-case-dark-blue text-white"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AnswersResults;
