import { ProgressBarAtom, QuestionCountAtom } from "../../lib/atoms/Quiz";
import { Progress } from "../ui/progress";
import { useAtomValue } from "jotai";

export default function ProgressBar() {
	const CurrentProgress = useAtomValue(ProgressBarAtom);
	const questionCount = useAtomValue(QuestionCountAtom);
	const Bar = (CurrentProgress / questionCount) * 100;
	return (
		<div className="absolute left-2 top-5 h-2.5 w-3/4 md:w-1/3">
			<Progress value={Bar} />
		</div>
	);
}
