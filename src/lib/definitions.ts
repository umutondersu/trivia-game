import { z } from "zod";

export type theme = "light" | "dark";

export const FormSchema = z.object({
	difficulty: z.enum(["easy", "medium", "hard", ""], {
		required_error: "Required",
	}),
	category: z
		.number({
			required_error: "Required",
			invalid_type_error: "Required",
		})
		.gte(8, "Must be at least 8")
		.lte(32, "Must be at most 32"),
	numberOfQuestions: z.coerce
		.number({
			invalid_type_error: "Required",
		})
		.gte(1, "Must be at least 1")
		.lte(50, "Must be at most 50"),
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
		}),
	),
});

export type TQuiz = {
	question: string;
	correct_answer: string;
	incorrect_answers: [string, string, string];
}[];

export const TokenSchema = z.object({
	response_code: z.number(),
	response_message: z.string(),
	token: z.string(),
});

export const ScoreTable = {
	incorrect: -1,
	easy: 1,
	medium: 2,
	hard: 3,
};
