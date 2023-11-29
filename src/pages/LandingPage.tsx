import PageContainer from "../components/PageContainer";
import QuizForm from "../components/LandingPage/QuizForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { useEffect } from "react";

export default function LandingPage() {
	useEffect(() => {
		localStorage.removeItem("QUIZ");
		localStorage.removeItem("ANSWERNUMBER");
		localStorage.removeItem("PROGRESS");
	}, []);
	return (
		<PageContainer className="justify-around">
			<h1 className="-mb-24 mt-8 self-center text-2xl font-extrabold sm:mb-0 sm:mt-0">
				Welcome!
			</h1>
			<Card className="mx-4 mt-24 text-sm sm:mx-20 sm:text-base md:-mt-20">
				<CardHeader>
					<CardTitle>How to play:</CardTitle>
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
		</PageContainer>
	);
}
