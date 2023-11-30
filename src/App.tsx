import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import useThemeAtom from "./hooks/useThemeAtom";
import ToggleButton from "./components/ui/togglebutton";
import { Toaster } from "./components/ui/toaster";

export default function App() {
	const [theme, toggleTheme] = useThemeAtom();

	return (
		<>
			<ToggleButton theme={theme} toggleTheme={toggleTheme} />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/score" element={<Score />} />
			</Routes>
			<a
				href="https://github.com/umutondersu"
				target="_blank"
				className="group absolute bottom-0 w-full text-center text-muted sm:-mb-12 md:mb-2">
				Made by{" "}
				<span className="transition-colors delay-0 duration-100 ease-linear group-hover:text-muted-foreground group-hover:underline">
					Umut
				</span>
			</a>
			<Toaster />
		</>
	);
}
