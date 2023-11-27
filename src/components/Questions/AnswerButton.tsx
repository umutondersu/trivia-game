import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function AnswerButton({
	answer,
}: {
	answer: {
		text: string;
		correct: boolean;
	};
}) {
	return answer.text !== "Loading" ? (
		<Button className="bg-background border text-text text-xl md:p-11 py-6">
			{answer.text}
		</Button>
	) : (
		<Button
			disabled
			className="bg-background border text-text text-xl md:p-11 py-6">
			<Skeleton className="w-full text-sm">&nbsp;</Skeleton>
		</Button>
	);
}
