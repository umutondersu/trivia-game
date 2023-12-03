import { AnswerStatusAtom, AnswersAtom } from "../../lib/atoms/Quiz";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ProgressBarAtom } from "../../lib/atoms/ProgressBar";

export default function AnswerButton({ index }: { index: number }) {
	const Answers = useAtomValue(AnswersAtom);
	const [{ answered }, setIsAnswered] = useAtom(AnswerStatusAtom);
	const setProgress = useSetAtom(ProgressBarAtom);

	const answer = Answers[index];
	const handleClick = () => {
		if (answered) return;
		setProgress((prev) => prev + 1);
		setIsAnswered({ correct: answer.correct, answered: true });
	};
	return (
		<Button
			onClick={handleClick}
			className={cn(
				"text-text border bg-background py-6 text-xl md:p-11",
				{
					"border-green-500 bg-green-500 hover:bg-green-500":
						answer.correct && answered,
					"border-red-500": !answer.correct && answered,
				},
			)}>
			{answer.text}
		</Button>
	);
}
