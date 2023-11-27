import { useAtom } from "jotai";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { loadableQuestionAtom } from "../../lib/atoms/Questions";
import { Skeleton } from "../ui/skeleton";

export default function QuestionCard() {
	const [Question] = useAtom(loadableQuestionAtom);
	return (
		<Card className="grid place-items-center relative md:mx-40 mx-9 md:h-40 h-52 text-center">
			{Question.state === "loading" ? (
				<Skeleton className="w-11/12 h-1/5" />
			) : (
				<CardHeader>
					<CardTitle>
						{Question.state === "hasData" ? Question.data : ""}
					</CardTitle>
				</CardHeader>
			)}
		</Card>
	);
}
