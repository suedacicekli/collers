import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {ExamState} from "../types/Types.tsx";

const useExamStore = create(
    persist<ExamState>(
        (set) => ({
            currentQuestionIndex: 0,
            isExamStarted: false,
            isExamFinished: false,
            answers: {},
            startExam: () =>
                set({isExamStarted: true, currentQuestionIndex: 1, answers: {}}),
            setAnswer: (questionId, answer) =>
                set((state) => ({
                    answers: {...state.answers, [questionId]: answer || ''},
                })),
            nextQuestion: () =>
                set((state) => ({
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                })),
            finishExam: () => set({isExamFinished: true}),
            reloadExam: () => set({isExamStarted: false, isExamFinished: false, currentQuestionIndex: 0, answers: {}}),
        }),
        {
            name: "exam-storage", // LocalStorage key adı
        }
    )
);

export default useExamStore;
