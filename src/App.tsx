import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import useThemeAtom from "./hooks/useThemeAtom";

export default function App() {
	const [theme, toggleTheme] = useThemeAtom();

	return (
		<>
			<Button
				onClick={toggleTheme}
				className="w-10 h-10 rounded-full p-0 m-3 fixed top-0 right-0">
				{theme === "light" ? (
					<img src="src/assets/moon.svg" alt="moon" />
				) : (
					<img src="src/assets/sun.svg" alt="sun" />
				)}
			</Button>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Question />} />
				<Route path="/score" element={<Score />} />
			</Routes>
		</>
	);
}
