import { z } from "zod";

export type theme = "light" | "dark";

export const FormSchema = z.object({
	difficulty: z.string({
		required_error: "Required",
	}),
	category: z.string({
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

export const CategoryMap = {
	1: "Entertainment: Books",
	2: "Entertainment: Film",
	3: "Entertainment: Music",
	4: "Entertainment: Musicals & Theatres",
	5: "Entertainment: Television",
	6: "Entertainment: Video Games",
	7: "Entertainment: Board Games",
	8: "Science & Nature",
	9: "Science: Computers",
	10: "Science: Mathematics",
	11: "Mythology",
	12: "Sports",
	13: "Geography",
	14: "History",
	15: "Politics",
	16: "Art",
	17: "Celebrities",
	18: "Animals",
	19: "Vehicles",
	20: "Entertainment: Comics",
	21: "Science: Gadgets",
	22: "Entertainment: Japanese Anime & Manga",
	23: "Entertainment: Cartoon & Animations",
};
