import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import getQuiz from "../data";

export const QuizAtom = atom(getQuiz);
//TODO: When user wants to play the game again, delete the quiz from localstorage

export const QuestionNumberAtom = atomWithStorage("AnswerNumber", 0);

export const AnsweredAtom = atom(false);

export const AnswersAtom = atom(async (get) => {
	const QuizPromise = get(QuizAtom);
	const questionNumber = get(QuestionNumberAtom);
	const Quiz = await QuizPromise;

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

export const QuestionAtom = atom(async (get) => {
	const QuizPromise = get(QuizAtom);
	const questionNumber = get(QuestionNumberAtom);
	const Quiz = await QuizPromise;

	const question = Quiz[questionNumber]["question"];
	return question;
});
