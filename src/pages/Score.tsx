import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { scoreAtom } from '../lib/atoms/Score';

export default function Score() {
  const [Score, setScore] = useAtom(scoreAtom);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    localStorage.removeItem('DIFFICULTY');
    localStorage.removeItem('QUIZ');
  }, []);

  const handleShare = () => {
    toast({
      title: 'Score Copied!',
      description: 'Just paste it anywhere to share it!',
    });
    navigator.clipboard.writeText(
      `I scored ${Score} on the trivia game! Try to beat my score at https://github.com/umutondersu/trivia-game`
    );
  };

  const ClassName = 'md:text-2xl md:w-64 w-52 h-28 text-xl font-bold';
  return (
    <PageContainer className="justify-around align-middle">
      <h1 className=" self-center font-extrabold text-2xl">Your Score is</h1>
      <h2 className=" self-center font-extrabold text-4xl">{Score}</h2>
      <div className="relative bottom-8 mt-8 flex flex-col items-center justify-around gap-y-9 sm:bottom-20 sm:flex-row">
        <Button
          className={ClassName}
          onClick={() => {
            setScore(0);
            navigate('/trivia-game/');
          }}
          variant="secondary"
        >
          Play again!
        </Button>
        <Button className={ClassName} onClick={handleShare} variant="secondary">
          Share your Score!
        </Button>
        <Button
          className={ClassName}
          onClick={() => {
            navigate('/trivia-game/');
          }}
          variant="secondary"
        >
          Keep playing! <br /> (Keep your score)
        </Button>
      </div>
    </PageContainer>
  );
}
