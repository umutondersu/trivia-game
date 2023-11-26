import AnswerButton from "./AnswerButton";
import type { Tanswers } from "../../lib/definitions";
import { useAtomValue } from "jotai";
import { AnswersAtom } from "../../lib/atoms/Questions";

function AnswerGrid() {
	const Answers = useAtomValue(AnswersAtom);
	return (
		<div className="relative bottom-10 grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-20 mx-8">
			{Answers.map((answer) => {
				return <AnswerButton>{answer.text}</AnswerButton>;
			})}
		</div>
	);
}

export default AnswerGrid;
