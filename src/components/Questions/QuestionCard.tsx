import { useAtomValue } from "jotai";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { QuestionAtom } from "../../lib/atoms/Quiz";

export default function QuestionCard() {
	const Question = useAtomValue(QuestionAtom);
	return (
		<Card className="relative mx-9 grid h-52 place-items-center text-center sm:top-3 sm:h-44 md:mx-40 md:h-40">
			<CardHeader>
				<CardTitle>{Question}</CardTitle>
			</CardHeader>
		</Card>
	);
}
