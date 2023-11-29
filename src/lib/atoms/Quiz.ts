import { atom } from "jotai";
import { atomWithStorage, loadable } from "jotai/utils";
import fetchQuiz from "../data";

export const QuizAtom = atom(fetchQuiz);
//TODO: When user wants to play the game again, delete the quiz from localstorage

export const QuestionNumberAtom = atomWithStorage("ANSWERNUMBER", 0);

export const AnswerStatusAtom = atom({ answered: false, correct: false });

const AnswersAtom = atom(async (get) => {
	const Quiz = await get(QuizAtom);
	const questionNumber = get(QuestionNumberAtom);
	console.log("questionNumber inside AnswersAtom is:", questionNumber);
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
export const loadableAnswerAtom = loadable(AnswersAtom);

const QuestionAtom = atom(async (get) => {
	const Quiz = await get(QuizAtom);
	const questionNumber = get(QuestionNumberAtom);

	const question = Quiz[questionNumber]["question"];
	return question;
});
export const loadableQuestionAtom = loadable(QuestionAtom);

export const QuestionCountAtom = atom(async (get) => {
	const Quiz = await get(QuizAtom);
	return Quiz.length;
});
