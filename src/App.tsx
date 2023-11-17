import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import useThemeAtom from "./hooks/useThemeAtom";

export default function App() {
	const [_, toggleTheme] = useThemeAtom();

	return (
		<>
			<h1>App</h1>
			<Button onClick={toggleTheme} className="bg-background">
				Toggle Theme
			</Button>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Question />} />
				<Route path="/score" element={<Score />} />
			</Routes>
		</>
	);
}
