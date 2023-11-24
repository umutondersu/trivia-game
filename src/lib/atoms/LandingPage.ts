import { atom } from "jotai";
import { z } from "zod";
import { FormSchema } from "../definitions";

export const quizFormAtom = atom<z.infer<typeof FormSchema>>({
	difficulty: "",
	category: NaN,
	numberOfQuestions: NaN,
});
