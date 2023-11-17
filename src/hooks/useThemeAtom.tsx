import { useEffect } from "react";
import { useAtom } from "jotai";
import { theme } from "../lib/definitions";
import { themeAtom } from "../lib/atom";

export default function useThemeAtom(): [theme, () => void] {
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

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};
	//TODO: Light Mode Flashes on load for a second (maybe use a loading screen)
	return [theme, toggleTheme];
}
