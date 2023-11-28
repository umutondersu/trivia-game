import { cn } from "../../lib/utils";
import Check from "../../assets/circle-check-regular.svg";
import { useAtomValue } from "jotai";
import { AnswerStatusAtom } from "../../lib/atoms/Questions";
import { CheckCircle2, XCircle } from "lucide-react";

function AnswerStatusBar() {
	const answered = useAtomValue(AnswerStatusAtom);
	const ClassName = "relative inline top-[1px] text-foreground";
	//TODO: Change Icons with Lucide React Icons
	return (
		<div
			className={cn(
				"relative bottom-3 mx-auto flex w-60 items-center justify-center gap-x-1 rounded-sm bg-red-600 p-2 opacity-0 md:bottom-6 md:w-80",
				{
					"opacity-100": answered.answered,
					"bg-green-600": answered.correct === true,
				},
			)}>
			{answered.correct ? (
				<>
					<CheckCircle2 className={ClassName} size={25} />
					Correct Answer!
				</>
			) : (
				<>
					<XCircle className={ClassName} size={25} />
					Incorrect Answer!
				</>
			)}
		</div>
	);
}

export default AnswerStatusBar;
