import { useAtom, useAtomValue } from "jotai";
import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import PageContainer from "../components/PageContainer";
import AnswerStatusBar from "../components/Questions/AnswerStatusBar";
import AnswerGrid from "../components/Questions/AnswerGrid";
import { AnsweredAtom, AnswersAtom, QuizAtom } from "../lib/atoms/Questions";

function Quiz() {
	return (
		<PageContainer className="justify-evenly">
			<Card className="grid place-items-center relative md:mx-40 mx-9 md:top-0 -top-4 md:h-40 h-52 text-center">
				<CardHeader>
					<CardTitle>Who was in Paris?</CardTitle>
				</CardHeader>
			</Card>
			<AnswerStatusBar />
			<AnswerGrid />
			<Progress className="absolute bottom-6" value={0} />
		</PageContainer>
	);
}
export default Quiz;
