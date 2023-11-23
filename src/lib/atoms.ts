import { atomWithStorage } from "jotai/utils";
import type { theme, TFormValues } from "./types";
import { atom } from "jotai";

export const themeAtom = atomWithStorage<theme>("THEME", "light");

export const quizFormAtom = atom<TFormValues>({
	difficulty: "",
	category: "",
	numberOfQuestions: NaN,
});
