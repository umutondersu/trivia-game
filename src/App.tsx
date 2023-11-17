import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Question from "./pages/Question";
import Score from "./pages/Score";
import useThemeAtom from "./hooks/useThemeAtom";
import ToggleButton from "./components/ui/togglebutton";

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
		</>
	);
}
