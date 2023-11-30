import { atom } from "jotai";
import { z } from "zod";
import { FormSchema } from "../definitions";
import { atomWithStorage } from "jotai/utils";

export const quizFormAtom = atom<z.infer<typeof FormSchema>>({
	difficulty: "",
	category: NaN,
	numberOfQuestions: NaN,
});

export const difficultyAtom = atomWithStorage<"easy" | "medium" | "hard" | "">(
	"DIFFICULTY",
	"",
);
