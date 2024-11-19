export interface BestProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onBuyNow: () => void;
}

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export interface Question {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ExamState {
  currentQuestionIndex: number;
  isExamStarted: boolean;
  isExamFinished: boolean;
  answers: Record<number, string>; // Map question ID to selected answer
  startExam: () => void;
  setAnswer: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  finishExam: () => void;
  reloadExam: () => void;
}
