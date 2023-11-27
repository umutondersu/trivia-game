import AnswerButton from "./AnswerButton";
import { useAtom } from "jotai";
import { loadableAnswerAtom } from "../../lib/atoms/Questions";

export default function AnswerGrid() {
	const [Answers] = useAtom(loadableAnswerAtom);

	return (
		<div className="relative md:bottom-10 grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-y-16 md:gap-x-10 md:mx-20 mx-8 -mt-5 md:mt-0">
			{Answers.state === "hasData"
				? Answers.data.map((answer, index) => {
						return <AnswerButton key={index} answer={answer} />;
				  })
				: Array.from({ length: 4 }, (_, index) => (
						<AnswerButton
							key={index}
							answer={{ text: "Loading", correct: false }}
						/>
				  ))}
		</div>
	);
}
