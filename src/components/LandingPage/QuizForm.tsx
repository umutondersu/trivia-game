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
import { difficultyAtom, quizFormAtom } from "../../lib/atoms/LandingPage";
import { useSetAtom, useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { startTransition, useEffect } from "react";
import { Dice5 } from "lucide-react";

export default function QuizForm() {
	const [QuizForm, setQuizForm] = useAtom(quizFormAtom);
	const setPersistentdifficulty = useSetAtom(difficultyAtom);
	const navigate = useNavigate();

	const form = useForm<TFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			// @ts-expect-error
			numberOfQuestions: "",
		},
	});

	function onSubmit(data: TFormValues) {
		setQuizForm(data);
		setPersistentdifficulty(data.difficulty);
	}

	useEffect(() => {
		if (QuizForm) {
			startTransition(() => navigate("/quiz"));
		}
	}, [QuizForm]);

	const handleRandomize = () => {
		form.setValue(
			"difficulty",
			["easy", "medium", "hard"][
				Math.floor(Math.random() * 3)
			] as TFormValues["difficulty"],
		);
		form.setValue("category", Math.floor(Math.random() * 23) + 1);
		form.setValue("numberOfQuestions", Math.floor(Math.random() * 50) + 1);
	};

	return (
		<>
			{!QuizForm ? (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col">
						<div className="mx-5 mb-20 mt-3 flex max-h-60 flex-auto flex-col justify-evenly sm:mx-10 md:-mx-36 md:-mt-20 md:flex-row">
							<FormField
								control={form.control}
								name="difficulty"
								render={({ field }) => (
									<FormItem className="basis-2/12">
										<FormLabel>Difficulty</FormLabel>
										<Select
											key={form.watch("difficulty")}
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
											key={form.watch("category")}
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
												<SelectItem value="1">
													Entertainment: Books
												</SelectItem>
												<SelectItem value="2">
													Entertainment: Film
												</SelectItem>
												<SelectItem value="3">
													Entertainment: Music
												</SelectItem>
												<SelectItem value="4">
													Entertainment: Musicals
													&amp; Theatres
												</SelectItem>
												<SelectItem value="5">
													Entertainment: Television
												</SelectItem>
												<SelectItem value="6">
													Entertainment: Video Games
												</SelectItem>
												<SelectItem value="7">
													Entertainment: Board Games
												</SelectItem>
												<SelectItem value="8">
													Science & Nature
												</SelectItem>
												<SelectItem value="9">
													Science: Computers
												</SelectItem>
												<SelectItem value="10">
													Science: Mathematics
												</SelectItem>
												<SelectItem value="11">
													Mythology
												</SelectItem>
												<SelectItem value="12">
													Sports
												</SelectItem>
												<SelectItem value="13">
													Geography
												</SelectItem>
												<SelectItem value="14">
													History
												</SelectItem>
												<SelectItem value="15">
													Politics
												</SelectItem>
												<SelectItem value="16">
													Art
												</SelectItem>
												<SelectItem value="17">
													Celebrities
												</SelectItem>
												<SelectItem value="18">
													Animals
												</SelectItem>
												<SelectItem value="19">
													Vehicles
												</SelectItem>
												<SelectItem value="20">
													Entertainment: Comics
												</SelectItem>
												<SelectItem value="21">
													Science: Gadgets
												</SelectItem>
												<SelectItem value="22">
													Entertainment: Japanese
													Anime & Manga
												</SelectItem>
												<SelectItem value="23">
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
							className="absolute bottom-7 left-8 h-10 w-10 bg-green-500 p-2 hover:bg-green-500"
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
				<div className="flex flex-col items-center justify-center">
					<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
					<p className="text-2xl text-gray-900">Loading...</p>
				</div>
			)}
		</>
	);
}
