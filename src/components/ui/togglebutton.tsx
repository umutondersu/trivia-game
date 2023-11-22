import { Button } from "./button";
import MoonIconSrc from "../../assets/moon.svg";
import SunIconSrc from "../../assets/sun.svg";
import { theme } from "../../lib/types";

function ToggleButton({
	theme,
	toggleTheme,
}: {
	theme: theme;
	toggleTheme: () => void;
}) {
	return (
		<Button
			onClick={toggleTheme}
			className="w-10 h-10 rounded-full p-0 m-3 fixed top-0 right-0">
			<img
				className="transition-all ease-linear duration-150 active:scale-50 active:translate-y-1"
				src={theme === "dark" ? SunIconSrc : MoonIconSrc}
				alt="toggle theme Icon"
			/>
		</Button>
	);
}

export default ToggleButton;
