import React from "react";
import { Button } from "../ui/button";

function AnswerButton({ children }: { children: React.ReactNode }) {
	return (
		<Button className="bg-background border text-text md:p-11 py-5">
			{children}
		</Button>
	);
}

// function AnswerButton({ Answer }: { Answer: { answer: string; correct: boolean } }) {
// 	return (
// 		<Button className="bg-background border text-text md:p-11 py-5">
// 			{Answer.answer}
// 		</Button>
// 	);
// }
export default AnswerButton;
