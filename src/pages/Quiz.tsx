import { Progress } from "../components/ui/progress";
import PageContainer from "../components/PageContainer";
import AnswerStatusBar from "../components/Questions/AnswerStatusBar";
import AnswerGrid from "../components/Questions/AnswerGrid";
import QuestionCard from "../components/Questions/QuestionCard";
import ProgressBar from "../components/Questions/ProgressBar";

function Quiz() {
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
