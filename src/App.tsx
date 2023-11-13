import { useAtom, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import { theme } from "./lib/definitions";
import blurryGradientHaikei from "./assets/blurry-gradient-haikei.svg";
import ButtonTest from "./ButtonTest";

const themeAtom = atomWithStorage<theme>("THEME", undefined);

export const toggleThemeAtom = atom(
	(get) => get(themeAtom),
	(get, set) => {
		const theme = get(themeAtom);
		set(themeAtom, theme === "light" ? "dark" : "light");
	}
);
// 	const toggleTheme = useAtom(toggleThemeAtom)[1];

export default function App() {
	// For theme
	const [theme, setTheme] = useAtom(themeAtom);

	console.log(theme);
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
	// For theme

	return (
		<div
			className={theme === "dark" ? "dark-bg" : ""}
			style={{
				backgroundImage:
					theme === "light" ? `url(${blurryGradientHaikei})` : "none",
				backgroundSize: "cover",
				height: "100vh",
				width: "100vw",
			}}>
			<ButtonTest />
		</div>
	);
}
