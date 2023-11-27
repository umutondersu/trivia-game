import AnswerButton from "./AnswerButton";
import { useAtom } from "jotai";
import { loadableAnswerAtom } from "../../lib/atoms/Questions";

function AnswerGrid() {
	const [Answers] = useAtom(loadableAnswerAtom);

	return (
		<div className="relative md:bottom-10 grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-y-16 md:gap-x-10 md:mx-20 mx-8 -mt-5 md:mt-0">
			{Answers.state === "hasData" &&
				Answers.data.map((answer) => {
					return <AnswerButton>{answer.text}</AnswerButton>;
				})}
		</div>
	);
}

export default AnswerGrid;
