import { atomWithStorage } from "jotai/utils";

export const scoreAtom = atomWithStorage<number>("SCORE", 0);
