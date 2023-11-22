import QuizForm from "../components/ui/QuizForm";

function LandingPage() {
	return (
		<div className="flex flex-col justify-around h-screen">
			<h1 className="self-center">Trivia Game </h1>
			<p className="mx-60 -mt-14 lg:mx-20">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
				voluptatibus id quod maiores cumque, iste sit eligendi error.
				Atque excepturi consequuntur dignissimos iure omnis delectus
				quis voluptas, voluptate culpa ullam! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Ab, quam earum consequatur
				consectetur blanditiis accusamus architecto commodi placeat
				laboriosam similique dolorem velit, odio quas facilis temporibus
				est? Dolor, possimus eveniet.
			</p>
			<QuizForm />
		</div>
	);
}

export default LandingPage;
