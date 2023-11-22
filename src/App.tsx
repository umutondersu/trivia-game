import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import useThemeAtom from "./hooks/useThemeAtom";
import ToggleButton from "./components/ui/ToggleButton";

export default function App() {
	const [theme, toggleTheme] = useThemeAtom();

	return (
		<>
			<ToggleButton theme={theme} toggleTheme={toggleTheme} />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Question />} />
				<Route path="/score" element={<Score />} />
			</Routes>
			<a
				href="https://github.com/umutondersu"
				target="_blank"
				className="absolute bottom-0 right-[46.9%] mb-2 text-muted group">
				Made by{" "}
				<span className="group-hover:text-muted-foreground group-hover:underline transition-colors ease-linear duration-100 delay-0">
					Umut
				</span>
			</a>
		</>
	);
}
