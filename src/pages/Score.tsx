import { useAtom } from "jotai";
import PageContainer from "../components/PageContainer";
import { scoreAtom } from "../lib/atoms/Score";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import { useEffect } from "react";

export default function Score() {
	const [Score, setScore] = useAtom(scoreAtom);
	const navigate = useNavigate();
	const { toast } = useToast();

	useEffect(() => {
		localStorage.removeItem("DIFFICULTY");
		localStorage.removeItem("QUIZ");
	}, []);

	const handleShare = () => {
		toast({
			title: "Score Copied!",
			description: "Just paste it anywhere to share it!",
		});
		navigator.clipboard.writeText(
			`I scored ${Score} on the trivia game! Try to beat my score at https://github.com/umutondersu/trivia-game`,
		);
	};

	const ClassName = "md:text-2xl md:w-64 w-52 h-28 text-xl font-bold";
	return (
		<PageContainer className="justify-around align-middle">
			<h1 className=" self-center text-2xl font-extrabold">
				Your Score is
			</h1>
			<h2 className=" self-center text-4xl font-extrabold">{Score}</h2>
			<div className="relative bottom-8 mt-8 flex flex-col items-center justify-around gap-y-9 sm:bottom-20 sm:flex-row">
				<Button
					variant="secondary"
					onClick={() => {
						setScore(0);
						navigate("/trivia-game/");
					}}
					className={ClassName}>
					Play again!
				</Button>
				<Button
					variant="secondary"
					onClick={handleShare}
					className={ClassName}>
					Share your Score!
				</Button>
				<Button
					variant="secondary"
					onClick={() => {
						navigate("/trivia-game/");
					}}
					className={ClassName}>
					Keep playing! <br /> (Keep your score)
				</Button>
			</div>
		</PageContainer>
	);
}
