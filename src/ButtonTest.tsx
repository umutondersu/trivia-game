import React from "react";
import { Button } from "./components/ui/button";
import { useAtom } from "jotai";
import { toggleThemeAtom } from "./App";

export default function ButtonTest() {
	const toggleTheme = useAtom(toggleThemeAtom)[1];

	return (
		<>
			<h1>Test</h1>
			<Button variant="destructive" onClick={toggleTheme}>
				Toggle Theme
			</Button>
		</>
	);
}
