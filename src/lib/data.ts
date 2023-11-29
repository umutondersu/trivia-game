import { useAtomValue } from "jotai";
import { quizFormAtom } from "./atoms/LandingPage";
import { QuizSchema, TQuiz, TokenSchema } from "./definitions";
import { htmlEntitiesToUtf8 } from "./utils";

async function fetchToken(): Promise<string> {
	try {
		const token = await fetch(
			"https://opentdb.com/api_token.php?command=request",
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

export default async function fetchQuiz(): Promise<TQuiz> {
	if (localStorage.getItem("QUIZ"))
		return JSON.parse(localStorage.getItem("QUIZ") as string);
	const { difficulty, category, numberOfQuestions } =
		useAtomValue(quizFormAtom);
	try {
		const token = await fetchToken();
		console.log("token is:", token);
		const response = await fetch(
			`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`,
		);
		if (!response.ok) throw new Error("Bad response");

		const rawdata = QuizSchema.safeParse(await response.json());
		if (!rawdata.success) throw new Error("response has an invalid format");

		const data = rawdata.data;
		switch (data.response_code) {
			case 1:
				throw new Error(
					"There are no more questions in this category.",
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

		data.results.forEach((result) => {
			delete result["type"];
			delete result["difficulty"];
			delete result["category"];
			result["question"] = htmlEntitiesToUtf8(result["question"]);
			result["correct_answer"] = htmlEntitiesToUtf8(
				result["correct_answer"],
			);
			result["incorrect_answers"] = result["incorrect_answers"].map(
				(answer) => htmlEntitiesToUtf8(answer),
			) as [string, string, string];
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
