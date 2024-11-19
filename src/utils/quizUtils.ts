import TimerBlue from "../assets/quiz-assets/images/timer-blue.png";
import TimerYellow from "../assets/quiz-assets/images/timer-yellow.png";
import TimerRed from "../assets/quiz-assets/images/timer-red.png";
import {QUESTIONS_SIZE} from "../constants/quizim.ts";

export function generateOptionsFromParagraph(paragraph: string): string[] {
    if (!paragraph) {
        throw new Error("Invalid paragraph: Input must be a non-empty string.");
    }

    const words = paragraph.split(/\s+/);

    if (words.length < 4) {
        throw new Error("Paragraph must contain at least 4 words.");
    }

    return words.slice(0, 4);
}

export const getTimerStyle = (timeLeft: number) => {
    if (timeLeft > 20) {
        return {
            image: TimerBlue,
            textColor: "#121C4E",
        };
    } else if (timeLeft > 10) {
        return {
            image: TimerYellow,
            textColor: "#E89F00",
        };
    } else {
        return {
            image: TimerRed,
            textColor: "#E74E4E",
        };
    }
};

export const getNextButtonLabel = (
    currentQuestionIndex: number,
    isQuestionAnswered: boolean
): string => {
    if (currentQuestionIndex === QUESTIONS_SIZE) {
        return "Sınavı Bitir";
    }

    return currentQuestionIndex < QUESTIONS_SIZE && !isQuestionAnswered
        ? "Boş Geç"
        : "Sonraki";
};

