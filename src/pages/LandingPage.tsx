import { useEffect } from 'react';
import QuizForm from '../components/LandingPage/QuizForm';
import PageContainer from '../components/PageContainer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

export default function LandingPage() {
  useEffect(() => {
    localStorage.removeItem('DIFFICULTY');
    localStorage.removeItem('QUIZ');
    localStorage.removeItem('ANSWERNUMBER');
    localStorage.removeItem('PROGRESS');
  }, []);
  return (
    <PageContainer className="justify-around">
      <h1 className="-mb-20 mt-4 self-center font-extrabold text-2xl sm:mt-0 sm:mb-0 sm:hidden md:block">
        Welcome!
      </h1>
      <Card className="md:-mt-20 mx-4 mt-24 text-sm sm:mx-20 sm:text-base">
        <CardHeader>
          <CardTitle>How to play:</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            <li>
              - Choose your game parameters:{' '}
              <span className="font-medium font-mono text-muted-foreground">
                Difficulty
              </span>
              ,{' '}
              <span className="font-medium font-mono text-muted-foreground">
                Topic
              </span>
              , and{' '}
              <span className="font-medium font-mono text-muted-foreground">
                Number of Questions
              </span>
              .
            </li>
            <li>
              - You will be presented with multiple choice questions based on
              the parameters you chose.
            </li>
            <li>- Answer the questions to the best of your ability.</li>
            <li>
              - At the end of the game, you can share your score, start a new
              game, or keep playing with your recent score.
            </li>
          </ol>
          <p className="my-2 underline">Enjoy!</p>
        </CardContent>
      </Card>
      <QuizForm />
    </PageContainer>
  );
}
