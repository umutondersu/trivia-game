import { cn } from "../../lib/utils";
import Check from "../../assets/circle-check-regular.svg";
import { useAtomValue } from "jotai";
import { AnswerStatusAtom } from "../../lib/atoms/Questions";

function AnswerStatusBar() {
	const answered = useAtomValue(AnswerStatusAtom);
	//TODO: Change Icons with Lucide React Icons
	return (
		<div
			className={cn(
				"relative bottom-3 mx-auto flex items-center justify-center gap-x-1 rounded-sm bg-green-600 p-2 opacity-0 md:bottom-6",
				{
					"opacity-100": answered,
				},
			)}>
			<img className="inline h-5 w-5" src={Check} alt="Check Icon" />
			Correct or Incorrect Answer
		</div>
	);
}

export default AnswerStatusBar;
