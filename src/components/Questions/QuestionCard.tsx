import { useAtom } from "jotai";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { loadableQuestionAtom } from "../../lib/atoms/Quiz";
import { Skeleton } from "../ui/skeleton";

export default function QuestionCard() {
	const [Question] = useAtom(loadableQuestionAtom);
	return (
		<Card className="relative mx-9 grid h-52 place-items-center text-center sm:top-3 sm:h-44 md:mx-40 md:h-40">
			{Question.state === "loading" ? (
				<Skeleton className="h-1/5 w-11/12" />
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
