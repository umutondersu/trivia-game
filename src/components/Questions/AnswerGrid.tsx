import AnswerButton from "./AnswerButton";

function AnswerGrid({ currentAnswers }: { currentAnswers: string[] }) {
	return (
		<div className="relative bottom-10 grid md:grid-cols-2 grid-cols-1 gap-4 mx-8">
			{currentAnswers.map((answer) => {
				return <AnswerButton>{answer}</AnswerButton>;
			})}
		</div>
	);
}

export default AnswerGrid;
