// import { useAtomValue } from "jotai";
// import { QuizAtom } from "../lib/atoms";
// import { atom, useAtom } from "jotai";

import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

// const QuestionNumber = atom(0);
function Questions() {
	// const Questions = useAtomValue(QuizAtom);
	// const [questionNumber, setQuestionNumber] = useAtom(QuestionNumber);

	return (
		<div className="h-screen w-screen">
			<Card>
				<CardHeader>
					<CardTitle>Who was in Paris?</CardTitle>
				</CardHeader>
			</Card>
			<div className="bg-green-600">Correct or Incorrect Answer</div>
			<>
				<div>
					<div>Answer 1</div>
					<div>Answer 2</div>
				</div>
				<div>
					<div>Answer 3</div>
					<div>Answer 4</div>
				</div>
			</>
			<Progress value={0} />
		</div>
	);
}
export default Questions;
