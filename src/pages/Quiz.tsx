import { Progress } from "../components/ui/progress";
import PageContainer from "../components/PageContainer";
import AnswerStatusBar from "../components/Questions/AnswerStatusBar";
import AnswerGrid from "../components/Questions/AnswerGrid";
import QuestionCard from "../components/Questions/QuestionCard";

function Quiz() {
	return (
		<PageContainer className="justify-evenly">
			<QuestionCard />
			<AnswerStatusBar />
			<AnswerGrid />
			<Progress className="absolute bottom-6" value={0} />
		</PageContainer>
	);
}
export default Quiz;
