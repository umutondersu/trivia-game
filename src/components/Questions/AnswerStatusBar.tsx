import { useAtomValue } from 'jotai';
import { CheckCircle2, XCircle } from 'lucide-react';
import { AnswerStatusAtom } from '../../lib/atoms/Quiz';
import { cn } from '../../lib/utils';

function AnswerStatusBar() {
  const { answered, correct } = useAtomValue(AnswerStatusAtom);
  const ClassName = 'relative inline top-[1px] text-foreground';
  return (
    <div
      className={cn(
        'relative bottom-3 mx-auto flex w-60 items-center justify-center gap-x-1 rounded-sm bg-red-600 p-2 opacity-0 md:bottom-6 md:w-80',
        {
          'opacity-100': answered,
          'bg-green-600': correct,
        }
      )}
    >
      {correct ? (
        <>
          <div>
            <CheckCircle2 className={ClassName} size={25} />
          </div>
          Correct Answer!
        </>
      ) : (
        <>
          <div>
            <XCircle className={ClassName} size={25} />
          </div>
          Incorrect Answer!
        </>
      )}
    </div>
  );
}

export default AnswerStatusBar;
