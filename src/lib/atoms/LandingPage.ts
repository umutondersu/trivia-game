import { atom } from "jotai";
import { z } from "zod";
import { FormSchema } from "../definitions";
import { atomWithStorage } from "jotai/utils";

export const quizFormAtom = atom<z.infer<typeof FormSchema> | null>(null);

export const difficultyAtom = atomWithStorage<"easy" | "medium" | "hard" | "">(
	"DIFFICULTY",
	"",
);
