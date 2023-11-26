import { z } from "zod";

export type theme = "light" | "dark";

export const FormSchema = z.object({
	difficulty: z.string({
		required_error: "Required",
	}),
	category: z.number({
		required_error: "Required",
	}),
	numberOfQuestions: z
		.string()
		.transform((value) => (value === "" ? NaN : Number(value)))
		.refine((value) => !isNaN(value), { message: "Required" })
		.refine((value) => value >= 1 && value <= 50, {
			message: "Must be between 1 and 50",
		}),
});
export type TFormValues = z.infer<typeof FormSchema>;

export const QuizSchema = z.object({
	response_code: z.number(),
	results: z.array(
		z.object({
			type: z.string().optional(),
			difficulty: z.string().optional(),
			category: z.string().optional(),
			question: z.string(),
			correct_answer: z.string(),
			incorrect_answers: z.tuple([z.string(), z.string(), z.string()]),
		})
	),
});

export type TQuiz =
	| {
			question: string;
			correct_answer: string;
			incorrect_answers: [string, string, string];
	  }[];

export const TokenSchema = z.object({
	response_code: z.number(),
	response_message: z.string(),
	token: z.string(),
});

export type Tanswers = {
	text: string;
	correct: boolean;
}[];
