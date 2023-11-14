import { useAtom } from "jotai";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Theme, { toggleThemeAtom } from "./Theme";

export default function App() {
	// For theme
	const toggleTheme = useAtom(toggleThemeAtom)[1];
	return (
		<Theme>
			<h1 className="text-def">App</h1>
			<Button className="text-def bg-bg" onClick={toggleTheme}>
				Toggle Theme
			</Button>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Question />} />
				<Route path="/score" element={<Score />} />
			</Routes>
		</Theme>
	);
}
