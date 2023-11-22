import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";
import { Input } from "./input";
import { FormSchema, TFormValues } from "../../lib/types";

function QuizForm() {
	const form = useForm<TFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			// @ts-ignore
			numberOfQuestions: "",
		},
	});

	function onSubmit(data: TFormValues) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col">
				<div className="flex flex-initial justify-evenly">
					<FormField
						control={form.control}
						name="difficulty"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Difficulty</FormLabel>
								<Select
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
								<FormDescription>
									Please choose a difficulty
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
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
											Entertainment: Musicals &amp;
											Theatres
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
										<SelectItem value="16">Art</SelectItem>
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
											Entertainment: Japanese Anime &
											Manga
										</SelectItem>
										<SelectItem value="23">
											Entertainment: Cartoon & Animations
										</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>
									Please choose a category
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="numberOfQuestions"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Number of Questions</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g 10"
										type="number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button className="self-center" type="submit">
					Start the Game
				</Button>
			</form>
		</Form>
	);
}

export default QuizForm;

{
	/* <form className="flex flex-col gap-y-20">
			<div className="flex flex-initial justify-evenly bg-red-200">
				<div> Difficulty</div>
				<div> Category</div>
				<div> Number of Questions</div>
			</div>
			<Button className="self-center">Start the Game</Button>
		</form> */
}
