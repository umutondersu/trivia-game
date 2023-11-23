import { atomWithStorage } from "jotai/utils";
import { type theme, QuizSchema } from "./types";
import { FormSchema } from "./types";
import { z } from "zod";
import { atom } from "jotai";

export const themeAtom = atomWithStorage<theme>("THEME", "light");

export const quizFormAtom = atom<z.infer<typeof FormSchema>>({
	difficulty: "",
	category: NaN,
	numberOfQuestions: NaN,
});

export const QuizAtom = atom(async (get) => {
	const { difficulty, category, numberOfQuestions } = get(quizFormAtom);
	try {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
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

// Quizatom with zod-fetch
// export const quizAtom = atom(async (get) => {
// 	const { difficulty, category, numberOfQuestions } = get(quizFormAtom);
// 	try {
// 		const response = await fetchWithZod(
// 			QuizSchema,
// 			`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
// 		);
// 		switch (response.response_code) {
// 			case 1:
// 				throw new Error(
// 					"There are no more questions in this category."
// 				);
// 			case 2:
// 				throw new Error("Invalid parameters");
// 			case 3:
// 				throw new Error("Token not found");
// 			case 4:
// 				throw new Error("Token empty");
// 			case 5:
// 				throw new Error("Rate limit exceeded");
// 		}
// 		return response.results;
// 	} catch (error) {
// 		throw new Error(
// 			error instanceof Error ? error.message : "Unknown error"
// 		);
// 	}
// });
