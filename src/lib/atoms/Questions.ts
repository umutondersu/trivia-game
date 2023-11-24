import { Getter, atom } from "jotai";
import { QuizSchema, TokenSchema } from "../definitions";
import { quizFormAtom } from "./LandingPage";
import { atomWithStorage } from "jotai/utils";

// TODO: make it with atomwithstorage
const TokenAtom = atom(async () => {
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
});

export const QuizAtom = atomWithStorage("QUIZ", async (get: Getter) => {
	const { difficulty, category, numberOfQuestions } = get(quizFormAtom);
	try {
		const token = await get(TokenAtom);
		console.log(token);
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
		return data.results;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		else if (error && typeof error === "object" && "message" in error)
			throw new Error((error as { message: string }).message);
		else throw new Error("Unknown error");
	}
});

// const questionCount = Questions.length;
// const currentAnswers = [
// 	...Questions[questionNumber]["incorrect_answers"],
// 	Questions[questionNumber]["correct_answer"],
// ];
// const correctAnswer = Questions[questionNumber]["correct_answer"];
