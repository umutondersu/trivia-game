import { useAtom } from "jotai";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { loadableQuestionAtom } from "../../lib/atoms/Questions";
import { cn } from "../../lib/utils";

export default function QuestionCard() {
	const [Question] = useAtom(loadableQuestionAtom);
	return (
		<Card className="grid place-items-center relative md:mx-40 mx-9 md:top-0 -top-4 md:h-40 h-52 text-center">
			<CardHeader>
				<CardTitle>
					{Question.state === "hasData" ? Question.data : ""}
				</CardTitle>
			</CardHeader>
		</Card>
	);
}
