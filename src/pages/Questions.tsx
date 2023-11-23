import { useAtomValue } from "jotai";
import { QuizAtom } from "../lib/atoms";

function Questions() {
	const Questions = useAtomValue(QuizAtom);

	return <div>Questions</div>;
}

export default Questions;
