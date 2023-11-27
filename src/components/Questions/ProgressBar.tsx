import { Progress } from "../ui/progress";

export default function ProgressBar() {
	return (
		<div className="absolute top-5 left-2 md:w-1/3 w-3/4 h-2.5">
			<Progress value={0} />
		</div>
	);
}
