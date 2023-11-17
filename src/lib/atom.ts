import { atomWithStorage } from "jotai/utils";
import { theme } from "./definitions";

export const themeAtom = atomWithStorage<theme>("THEME", "light");
