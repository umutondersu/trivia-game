import { cn } from "../../lib/utils";
import Check from "../../assets/circle-check-regular.svg";
import { useAtomValue } from "jotai";
import { AnsweredAtom } from "../../lib/atoms/Questions";

function AnswerStatusBar() {
	const answered = useAtomValue(AnsweredAtom);
	return (
		<div
			className={cn(
				"relative bottom-10 bg-green-600 mx-auto rounded-sm flex items-center justify-center gap-x-1 p-2",
				answered ? "" : "opacity-0"
			)}>
			<img className="w-5 h-5 inline" src={Check} alt="Check Icon" />
			Correct or Incorrect Answer
		</div>
	);
}

export default AnswerStatusBar;
