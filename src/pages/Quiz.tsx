import { atom, useAtom, useAtomValue } from "jotai";
import { QuizAtom } from "../lib/atoms/Questions";

import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import PageContainer from "../components/PageContainer";
import AnswerStatusBar from "../components/Questions/AnswerStatusBar";
import AnswerGrid from "../components/Questions/AnswerGrid";

const QuestionNumberAtom = atom(0);
const AnsweredAtom = atom(true);

function Quiz() {
	const Questionss = useAtomValue(QuizAtom);
	console.log(Questionss);
	const Questions = [
		{
			type: "multiple",
			difficulty: "medium",
			category: "Science: Computers",
			question:
				"What is the number of keys on a standard Windows Keyboard?",
			correct_answer: "104",
			incorrect_answers: ["64", "94", "76"],
		},
		{
			type: "multiple",
			difficulty: "medium",
			category: "History",
			question:
				"Which of the following countries was the first to send an object into space?",
			correct_answer: "Germany",
			incorrect_answers: ["USA", "Russia", "China"],
		},
	];
	const [questionNumber, setQuestionNumber] = useAtom(QuestionNumberAtom);
	const [answered, setAnswered] = useAtom(AnsweredAtom);

	const questionCount = Questions.length;
	const currentAnswers = [
		...Questions[questionNumber]["incorrect_answers"],
		Questions[questionNumber]["correct_answer"],
	];
	const correctAnswer = Questions[questionNumber]["correct_answer"];

	return (
		<PageContainer className="justify-evenly">
			<Card className="grid place-items-center relative md:mx-40 mx-9 md:top-0 -top-4 md:h-40 h-52 text-center">
				<CardHeader>
					<CardTitle>Who was in Paris?</CardTitle>
				</CardHeader>
			</Card>
			<AnswerStatusBar answered={answered} />
			<AnswerGrid currentAnswers={currentAnswers} />
			<Progress className="absolute bottom-6" value={0} />
		</PageContainer>
	);
}
export default Quiz;
