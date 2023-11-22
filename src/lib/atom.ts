import { atomWithStorage } from "jotai/utils";
import { theme } from "./types";

export const themeAtom = atomWithStorage<theme>("THEME", "light");
