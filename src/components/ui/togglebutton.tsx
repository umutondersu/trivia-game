import { Button } from "./button";
import MoonIconSrc from "../../assets/moon.svg";
import SunIconSrc from "../../assets/sun.svg";
import { theme } from "../../lib/definitions";

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
			{theme === "light" ? (
				<img src={MoonIconSrc} alt="Moon Icon" />
			) : (
				<img src={SunIconSrc} alt="Sun Icon" />
			)}
		</Button>
	);
}

export default ToggleButton;
