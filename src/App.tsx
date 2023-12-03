import { Outlet } from "react-router-dom";
import ToggleButton from "./components/ui/togglebutton";
import { Toaster } from "./components/ui/toaster";

export default function App() {
	return (
		<>
			<ToggleButton />
			<Outlet />
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
