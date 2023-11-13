import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import { theme } from "./lib/definitions";
import blurryGradientHaikei from "./assets/blurry-gradient-haikei.svg";

export const themeAtom = atomWithStorage<theme>("THEME", undefined);
// const [theme, setTheme] = useAtom(themeAtom);
// const toggleTheme = () => {
// 	setTheme(theme === "dark" ? "light" : "dark");
// };

export default function App() {
	// For theme
	const [theme, setTheme] = useAtom(themeAtom);
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
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
			style={{
				backgroundImage:
					theme === "light" ? `url(${blurryGradientHaikei})` : "none",
				backgroundSize: "cover",
				height: "100vh",
				width: "100vw",
			}}>
			<h1 className="text-def">Hello World</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
}
