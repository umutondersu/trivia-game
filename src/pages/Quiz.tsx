import PageContainer from "../components/PageContainer";
import AnswerStatusBar from "../components/Questions/AnswerStatusBar";
import AnswerGrid from "../components/Questions/AnswerGrid";
import QuestionCard from "../components/Questions/QuestionCard";
import ProgressBar from "../components/Questions/ProgressBar";
import { useAtom, useAtomValue } from "jotai";
import {
	AnswerStatusAtom,
	QuestionCountAtom,
	QuestionNumberAtom,
} from "../lib/atoms/Quiz";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Quiz() {
	const [Isanswered, setIsAnswered] = useAtom(AnswerStatusAtom);
	const [QuestionNumber, setQuestionNumber] = useAtom(QuestionNumberAtom);
	const QuestionCount = useAtomValue(QuestionCountAtom);
	const navigate = useNavigate();

	useEffect(() => {
		if (Isanswered.answered) {
			setTimeout(() => {
				if (QuestionNumber === QuestionCount - 1) {
					setIsAnswered({ answered: false, correct: false });
					navigate("/score");
					return;
				}
				setQuestionNumber(QuestionNumber + 1);
				setIsAnswered((prev) => ({ ...prev, answered: false }));
			}, 5000);
		}
	}, [Isanswered.answered]);

	return (
		<PageContainer className="justify-evenly">
			<ProgressBar />
			<QuestionCard />
			<AnswerStatusBar />
			<AnswerGrid />
		</PageContainer>
	);
}
export default Quiz;
