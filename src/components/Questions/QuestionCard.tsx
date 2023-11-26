import { useAtomValue } from "jotai";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { QuestionAtom } from "../../lib/atoms/Questions";

export default function QuestionCard() {
	const Question = useAtomValue(QuestionAtom);
	return (
		<Card className="grid place-items-center relative md:mx-40 mx-9 md:top-0 -top-4 md:h-40 h-52 text-center">
			<CardHeader>
				<CardTitle>{Question}</CardTitle>
			</CardHeader>
		</Card>
	);
}
