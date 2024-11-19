import {useEffect, useState} from "react";
import {QuizStepper} from "../../../components";
import "./style.css";
import {getQuestionById} from "../../../services/apiService.ts";
import {Question} from "../../../types/Types.tsx";
import Modal from "../../../components/quizim/modal/modal.tsx";
import {ANSWER_ENABLE_THRESHOLD, QUESTIONS_SIZE, SECOND_FOR_EACH_QUESTION} from "../../../constants/quizim.ts";
import useExamStore from "../../../store/quizimStore.ts";
import {generateOptionsFromParagraph, getNextButtonLabel, getTimerStyle} from "../../../utils/quizUtils.ts";
import AnswersResults from "../../../components/quizim/answers-results/AnswersResults.tsx";

function QuestionSection() {
    const [timeLeft, setTimeLeft] = useState(SECOND_FOR_EACH_QUESTION);
    const [question, setQuestion] = useState<Question | null>(null);

    const {
        currentQuestionIndex,
        isExamStarted,
        isExamFinished,
        nextQuestion,
        setAnswer,
        answers,
        finishExam,
        reloadExam
    } = useExamStore();

    const handleAnswerSelect = (questionId: number, option: string) => {
        setAnswer(questionId, option);
    };

    const handleFinishExam = () => {
        finishExam();
    };


    useEffect(() => {
        setTimeLeft(SECOND_FOR_EACH_QUESTION);
        if (isExamStarted) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (timeLeft === 0) {
            handleNext();
        }
    }, [timeLeft]);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await getQuestionById(currentQuestionIndex);
                setQuestion(response);
            } catch (err) {
                console.log(err)
            }
        };
        if (isExamStarted) {
            fetchQuestion();
        }
    }, [currentQuestionIndex, isExamStarted]);

    const {image, textColor} = getTimerStyle(timeLeft);

    const isQuestionAnswered = (): boolean => {
        return !!question && answers[question.id] != undefined && answers[question.id] != "";
    };

    const handleNext = () => {
        if (!question) {
            return;
        }

        if (timeLeft > ANSWER_ENABLE_THRESHOLD) {
            return;
        }

        if (timeLeft === 0 || !isQuestionAnswered()) {
            setAnswer(question.id, "");
        }

        if (isExamStarted && currentQuestionIndex < QUESTIONS_SIZE) {
            nextQuestion();
            setTimeLeft(SECOND_FOR_EACH_QUESTION); // Yeni soruya geçildiğinde süre sıfırlanıyor
        }
    };

    if (!isExamStarted) {
        return <Modal/>;
    }

    if (isExamFinished) {
        return (
            <>
                <div className="flex flex-col justify-evenly items-center w-full h-screen space-y-8">
                    <AnswersResults/>
                    <button
                        onClick={reloadExam}
                        className="btn bg-case-dark-blue text-white hover:bg-case-dark-blue"
                    >
                        {getNextButtonLabel(currentQuestionIndex, isQuestionAnswered())}
                    </button>
                </div>
            </>
        );
    }

    return (
        question ? (
            <div className="flex flex-col  justify-evenly items-center h-screen space-y-8">
                <QuizStepper currentStep={currentQuestionIndex}/>

                <div className="text-xl container font-bold flex flex-col items-center space-y-4">
                    <div
                        className="w-full mx-20 p-4 rounded-md bg-quiestion-qray">
            <span className="text-gray-700 font-semibold">
              {currentQuestionIndex}-{" "}
            </span>
                        {question.body}
                    </div>
                    <ul className="flex flex-col sm:flex-row gap-4 w-full mx-4 justify-between">
                        {
                            generateOptionsFromParagraph(question?.body).map((option: string, index: number) => (
                                <li
                                    key={index}
                                    className={`p-2 rounded-md cursor-pointer flex items-center justify-center ${
                                        answers[currentQuestionIndex] === String.fromCharCode(65 + index)
                                            ? 'bg-blue-300 font-bold'
                                            : 'bg-gray-200'
                                    }`}
                                    onClick={() => handleAnswerSelect(question.id, String.fromCharCode(65 + index))}
                                >
                                    <span className="mr-2">{String.fromCharCode(65 + index)}</span>
                                    {option}
                                </li>
                            ))
                        }


                    </ul>
                </div>

                <div className="text-lg font-medium flex justify-center gap-16 items-center space-x-8 w-full">
                    <button
                        disabled
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                    >
                        Önceki
                    </button>
                    <div className="relative flex justify-center items-center">
          <span
              className="absolute font-bold text-xl"
              style={{color: textColor}}
          >
            {timeLeft}
          </span>
                        <img src={image} alt="Timer" className="h-12 w-12"/>
                    </div>

                    <button
                        onClick={() =>
                            currentQuestionIndex === QUESTIONS_SIZE
                                ? handleFinishExam()
                                : handleNext()
                        }
                        className="px-4 py-2 bg-case-dark-blue text-white rounded-lg"
                    >
                        {getNextButtonLabel(currentQuestionIndex, isQuestionAnswered())}
                    </button>
                </div>
            </div>
        ) : (
            <Modal/>
        )
    );
}

export default QuestionSection;
