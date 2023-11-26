import AnswerButton from "./AnswerButton";
import { useAtom, useAtomValue } from "jotai";
import { loadableAnswerAtom } from "../../lib/atoms/Questions";

function AnswerGrid() {
	const [Answers] = useAtom(loadableAnswerAtom);

	return (
		<div className="relative bottom-10 grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-20 mx-8">
			{Answers.state === "hasData" &&
				Answers.data.map((answer) => {
					return <AnswerButton>{answer.text}</AnswerButton>;
				})}
		</div>
	);
}

export default AnswerGrid;
