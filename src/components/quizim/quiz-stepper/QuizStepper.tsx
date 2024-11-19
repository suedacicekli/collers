import {QUESTIONS_SIZE} from "../../../constants/quizim.ts";

interface QuizStepperProps {
    currentStep: number;
}

function QuizStepper({currentStep}: QuizStepperProps) {
    console.log(currentStep)
    return (
        <div className="overflow-x-auto mt-16 flex gap-4 justify-center">
            {Array.from({length: QUESTIONS_SIZE}, (_, index) => (
                <div
                    key={index}
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                        index + 1 <= currentStep
                            ? "bg-[#121C4E] text-white" // Tamamlanan ve mevcut adım
                            : "bg-gray-300 text-black" // Kalan adımlar
                    }`}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
}

export default QuizStepper;
