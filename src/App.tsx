import { useAtom } from "jotai";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import ThemeProvider, { toggleThemeAtom } from "./ThemeProvider";

export default function App() {
	const toggleTheme = useAtom(toggleThemeAtom)[1];

	return (
		<ThemeProvider>
			<h1>App</h1>
			<Button onClick={toggleTheme}>Toggle Theme</Button>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/quiz" element={<Question />} />
				<Route path="/score" element={<Score />} />
			</Routes>
		</ThemeProvider>
	);
}
