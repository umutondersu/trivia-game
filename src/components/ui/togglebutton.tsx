import { Button } from "./button";
import { theme } from "../../lib/definitions";
import { Sun, Moon } from "lucide-react";

function ToggleButton({
	theme,
	toggleTheme,
}: {
	theme: theme;
	toggleTheme: () => void;
}) {
	const ClassName =
		"transition-all ease-linear duration-150 active:scale-50 active:translate-y-1 text-[hsl(222.2,84%,4.9%)]";
	return (
		<Button
			onClick={toggleTheme}
			className="absolute right-0 top-0 m-3 h-10 w-10 rounded-full p-0">
			{theme === "dark" ? (
				<Sun className={ClassName} />
			) : (
				<Moon className={ClassName} />
			)}
		</Button>
	);
}

export default ToggleButton;
