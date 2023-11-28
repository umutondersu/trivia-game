import {
	AnswerStatusAtom,
	loadableAnswerAtom,
} from "../../lib/atoms/Questions";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useAtom } from "jotai";

export default function AnswerButton({ index }: { index: number }) {
	const [Answers] = useAtom(loadableAnswerAtom);
	const [answered, setIsAnswered] = useAtom(AnswerStatusAtom);
	const Isanswered = answered.answered;
	const Classname = "text-text border bg-background py-6 text-xl md:p-11";

	if (Answers.state === "hasError") throw Answers.error;
	if (Answers.state === "loading") {
		return (
			<Button disabled className={Classname}>
				<Skeleton className="w-full text-sm">&nbsp;</Skeleton>
			</Button>
		);
	}

	const answer = Answers.data[index];
	const handleClick = () => {
		if (Isanswered) return;
		setIsAnswered({ correct: answer.correct, answered: true });
	};
	return (
		<Button
			onClick={handleClick}
			className={cn(Classname, {
				"border-green-500 bg-green-500 hover:bg-green-500":
					answer.correct && Isanswered,
				"border-red-500": !answer.correct && Isanswered,
			})}>
			{answer.text}
		</Button>
	);
}
