import { cn } from "../../lib/utils";
import Check from "../../assets/circle-check-regular.svg";
function AnswerStatusBar({ answered }: { answered: boolean }) {
	return (
		<div
			className={cn(
				"relative bottom-12 bg-green-600 mx-auto rounded-sm flex items-center justify-center gap-x-1 p-2",
				answered ? "" : "opacity-0"
			)}>
			<img className="w-5 h-5 inline" src={Check} alt="Check Icon" />
			Correct or Incorrect Answer
		</div>
	);
}

export default AnswerStatusBar;
