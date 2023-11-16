import { useEffect } from "react";
import { useAtom, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { theme } from "./lib/definitions";

const themeAtom = atomWithStorage<theme>("THEME", undefined);

export const toggleThemeAtom = atom(
	(get) => get(themeAtom),
	(get, set) => {
		const theme = get(themeAtom);
		set(themeAtom, theme === "light" ? "dark" : "light");
	}
);
// 	const toggleTheme = useAtom(toggleThemeAtom)[1];

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useAtom(themeAtom);

	useEffect(() => {
		if (localStorage.getItem("THEME")) return;
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);
	//TODO: Light Mode Flashes on load for a second (maybe use a loading screen)
	return <>{children}</>;
}

export default ThemeProvider;
