import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { FormSchema, TFormValues } from "../../lib/definitions";
import { difficultyAtom } from "../../lib/atoms/LandingPage";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { startTransition, useEffect } from "react";
import { Dice5 } from "lucide-react";
import { QuizAtom } from "../../lib/atoms/Quiz";
import fetchQuiz from "../../lib/data";
import { useToast } from "../ui/use-toast";

export default function QuizForm() {
	const setQuiz = useSetAtom(QuizAtom);
	const setPersistentdifficulty = useSetAtom(difficultyAtom);
	const { toast } = useToast();
	const navigate = useNavigate();

	const form = useForm<TFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			// @ts-expect-error stupid zod coercing forced my hand
			numberOfQuestions: "",
		},
	});

	const onSubmit = async (data: TFormValues) => {
		try {
			const request = await fetchQuiz(data);
			setQuiz(request);
			setPersistentdifficulty(data.difficulty);
			startTransition(() => navigate("/trivia-game/quiz"));
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Something went wrong!",
				description: error.message,
			});
		}
	};
	useEffect(() => {
		setQuiz(() => {
			return null;
		});
	}, []);
	const handleRandomize = () => {
		form.setValue(
			"difficulty",
			["easy", "medium", "hard"][
				Math.floor(Math.random() * 3)
			] as TFormValues["difficulty"],
		);
		form.setValue("category", Math.floor(Math.random() * 24) + 9);
		form.setValue("numberOfQuestions", Math.floor(Math.random() * 50) + 1);

		form.trigger();
	};

	return (
		<>
			{!form.formState.isSubmitting ? (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="relative flex flex-col">
						<div className="mx-5 mb-20 mt-3 flex max-h-60 flex-auto flex-col justify-evenly sm:mx-10 md:-mx-32 md:-mt-20 md:flex-row">
							<FormField
								control={form.control}
								name="difficulty"
								render={({ field }) => (
									<FormItem className="basis-2/12">
										<FormLabel>Difficulty</FormLabel>
										<Select
											key={field.value}
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a difficulty" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="easy">
													Easy
												</SelectItem>
												<SelectItem value="medium">
													Medium
												</SelectItem>
												<SelectItem value="hard">
													Hard
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem className="basis-2/12">
										<FormLabel>Category</FormLabel>
										<Select
											key={field.value}
											onValueChange={(value) =>
												field.onChange(Number(value))
											}
											defaultValue={
												field.value
													? field.value.toString()
													: ""
											}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a category" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="8">
													All Categories
												</SelectItem>
												<SelectItem value="9">
													General Knowledge
												</SelectItem>
												<SelectItem value="10">
													Entertainment: Books
												</SelectItem>
												<SelectItem value="11">
													Entertainment: Film
												</SelectItem>
												<SelectItem value="12">
													Entertainment: Music
												</SelectItem>
												<SelectItem value="13">
													Entertainment: Musicals
													&amp; Theatres
												</SelectItem>
												<SelectItem value="14">
													Entertainment: Television
												</SelectItem>
												<SelectItem value="15">
													Entertainment: Video Games
												</SelectItem>
												<SelectItem value="16">
													Entertainment: Board Games
												</SelectItem>
												<SelectItem value="17">
													Science & Nature
												</SelectItem>
												<SelectItem value="18">
													Science: Computers
												</SelectItem>
												<SelectItem value="19">
													Science: Mathematics
												</SelectItem>
												<SelectItem value="20">
													Mythology
												</SelectItem>
												<SelectItem value="21">
													Sports
												</SelectItem>
												<SelectItem value="22">
													Geography
												</SelectItem>
												<SelectItem value="23">
													History
												</SelectItem>
												<SelectItem value="24">
													Politics
												</SelectItem>
												<SelectItem value="25">
													Art
												</SelectItem>
												<SelectItem value="26">
													Celebrities
												</SelectItem>
												<SelectItem value="27">
													Animals
												</SelectItem>
												<SelectItem value="28">
													Vehicles
												</SelectItem>
												<SelectItem value="29">
													Entertainment: Comics
												</SelectItem>
												<SelectItem value="30">
													Science: Gadgets
												</SelectItem>
												<SelectItem value="31">
													Entertainment: Japanese
													Anime & Manga
												</SelectItem>
												<SelectItem value="32">
													Entertainment: Cartoon &
													Animations
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="numberOfQuestions"
								render={({ field }) => (
									<FormItem className="basis-2/12">
										<FormLabel>
											Number of Questions
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="e.g 10"
												type="number"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button
							type="button"
							className="absolute bottom-9 left-8 h-10 w-10 bg-green-500 p-2 hover:bg-green-500"
							onClick={handleRandomize}>
							<Dice5 strokeWidth={3} size={35} />
						</Button>
						<Button
							className="-mt-14 mb-8 self-center p-6 text-lg sm:-mt-5 sm:mb-16 sm:p-8 md:mb-5"
							type="submit">
							Start the Game
						</Button>
					</form>
				</Form>
			) : (
				<div className="mx-5 mb-20 mt-20 flex max-h-60 flex-auto flex-col items-center justify-center sm:mx-10 md:-mx-36 md:-mb-5 md:-mt-20">
					<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
					<p className="text-2xl text-gray-900">Loading...</p>
				</div>
			)}
		</>
	);
}
