import { useAtomValue } from 'jotai';
import { ProgressBarAtom } from '../../lib/atoms/ProgressBar';
import { QuestionCountAtom } from '../../lib/atoms/Quiz';
import { Progress } from '../ui/progress';

export default function ProgressBar() {
  const CurrentProgress = useAtomValue(ProgressBarAtom);
  const questionCount = useAtomValue(QuestionCountAtom);
  const Bar = (CurrentProgress / questionCount) * 100;
  return (
    <div className="absolute top-5 left-2 h-2.5 w-3/4 md:w-1/3">
      <Progress value={Bar} />
    </div>
  );
}
