import QuizForm from "../components/ui/LandingPage/QuizForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

function LandingPage() {
	return (
		<div className="flex flex-col justify-around h-screen overflow-hidden">
			<h1 className="self-center font-extrabold text-2xl">Welcome!</h1>
			<Card className="mx-60 -mt-20 md:mx-20 border-border">
				<CardHeader>
					<CardTitle>Here is how to play:</CardTitle>
				</CardHeader>
				<CardContent>
					<ol className="space-y-2">
						<li>
							- Choose your game parameters:{" "}
							<span className="font-mono font-medium text-muted-foreground">
								Difficulty
							</span>
							,{" "}
							<span className="font-mono font-medium text-muted-foreground">
								Topic
							</span>
							, and{" "}
							<span className="font-mono font-medium text-muted-foreground">
								Number of Questions
							</span>
							.
						</li>
						<li>
							- You will be presented with multiple choice
							questions based on the parameters you chose.
						</li>
						<li>
							- Answer the questions to the best of your ability.
						</li>
						<li>
							- At the end of the game, you can share your score
							with friends or play again with your progress
						</li>
					</ol>
					<p className="my-2 underline">Enjoy the game!</p>
				</CardContent>
			</Card>
			<QuizForm />
		</div>
	);
}

export default LandingPage;
