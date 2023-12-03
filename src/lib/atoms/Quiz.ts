import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { TQuiz } from "../definitions";

export const QuizAtom = atom<TQuiz | null>(null);

export const QuestionNumberAtom = atomWithStorage("ANSWERNUMBER", 0);

export const AnswerStatusAtom = atom({ answered: false, correct: false });

export const AnswersAtom = atom((get) => {
	const Quiz =
		get(QuizAtom) ||
		(JSON.parse(localStorage.getItem("QUIZ") as string) as TQuiz);
	const questionNumber = get(QuestionNumberAtom);
	const Answers = Quiz[questionNumber]["incorrect_answers"].map((answer) => ({
		text: answer,
		correct: false,
	}));
	Answers.push({
		text: Quiz[questionNumber]["correct_answer"],
		correct: true,
	});
	Answers.sort(() => Math.random() - 0.5);
	return Answers;
});

export const QuestionAtom = atom((get) => {
	const Quiz =
		get(QuizAtom) ||
		(JSON.parse(localStorage.getItem("QUIZ") as string) as TQuiz);
	const questionNumber = get(QuestionNumberAtom);

	const question = Quiz[questionNumber]["question"];
	return question;
});

export const QuestionCountAtom = atom((get) => {
	const Quiz =
		get(QuizAtom) ||
		(JSON.parse(localStorage.getItem("QUIZ") as string) as TQuiz);
	return Quiz.length;
});
