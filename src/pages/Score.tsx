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
	}, []);

	const handleShare = () => {
		toast({
			title: "Score Copied!",
			description: "Just paste it anywhere to share your it!",
		});
		navigator.clipboard.writeText(`I scored ${Score} on the trivia game!`);
	};

	const ClassName = "md:text-2xl md:w-60 w-52 h-28 text-xl";
	return (
		<PageContainer className="items-center justify-around align-middle">
			<h1 className=" text-2xl font-extrabold">Your Score is</h1>
			<h2 className=" text-4xl font-extrabold">{Score}</h2>
			<div className="relative bottom-8 mt-8 flex flex-shrink flex-col justify-center gap-10 md:bottom-20 md:flex-row md:gap-80">
				<Button
					variant="secondary"
					onClick={() => {
						setScore(0);
						navigate("/");
					}}
					className={ClassName}>
					Play again! <br /> (Reset your score)
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
						navigate("/");
					}}
					className={ClassName}>
					Keep playing! <br /> (Keep your score)
				</Button>
			</div>
		</PageContainer>
	);
}
