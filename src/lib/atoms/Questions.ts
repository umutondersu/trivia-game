import { atom, useAtomValue } from "jotai";
import { QuizSchema, TQuiz, Tanswers, TokenSchema } from "../definitions";
import { quizFormAtom } from "./LandingPage";
import { atomWithStorage } from "jotai/utils";

async function getToken(): Promise<string | undefined> {
	try {
		const token = await fetch(
			"https://opentdb.com/api_token.php?command=request"
		);
		if (!token.ok) throw new Error("Bad response");
		const rawtoken = TokenSchema.safeParse(await token.json());

		if (!rawtoken.success)
			throw new Error("response has an invalid format");

		if (rawtoken.data.response_code !== 0)
			throw new Error("Unable to get token");
		return rawtoken.data.token;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else if (error && typeof error === "object" && "message" in error) {
			throw new Error((error as { message: string }).message);
		} else {
			throw new Error("Unknown error");
		}
	}
}

async function getQuiz(): Promise<TQuiz> {
	if (localStorage.getItem("QUIZ"))
		return JSON.parse(localStorage.getItem("QUIZ") as string);
	const { difficulty, category, numberOfQuestions } =
		useAtomValue(quizFormAtom);
	try {
		const token = await getToken();
		const response = await fetch(
			`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`
		);
		if (!response.ok) throw new Error("Bad response");

		const rawdata = QuizSchema.safeParse(await response.json());
		if (!rawdata.success) throw new Error("response has an invalid format");

		const data = rawdata.data;
		switch (data.response_code) {
			case 1:
				throw new Error(
					"There are no more questions in this category."
				);
			case 2:
				throw new Error("Invalid parameters");
			case 3:
				throw new Error("Token not found");
			case 4:
				throw new Error("Token empty");
			case 5:
				throw new Error("Rate limit exceeded");
		}
		// Remove type,difficulty,category parameters
		data.results.forEach((result) => {
			delete result["type"];
			delete result["difficulty"];
			delete result["category"];
		});
		localStorage.setItem("QUIZ", JSON.stringify(data.results));
		return data.results;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		else if (error && typeof error === "object" && "message" in error)
			throw new Error((error as { message: string }).message);
		else throw new Error("Unknown error");
	}
}

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
	return Answers satisfies Tanswers;
});
// const questionCount = Questions.length;
// const currentAnswers = [
// 	...Questions[questionNumber]["incorrect_answers"],
// 	Questions[questionNumber]["correct_answer"],
// ];
// const correctAnswer = Questions[questionNumber]["correct_answer"];
