import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import PageContainer from '../components/PageContainer';
import AnswerGrid from '../components/Questions/AnswerGrid';
import AnswerStatusBar from '../components/Questions/AnswerStatusBar';
import ProgressBar from '../components/Questions/ProgressBar';
import QuestionCard from '../components/Questions/QuestionCard';
import { difficultyAtom } from '../lib/atoms/LandingPage';
import {
  AnswerStatusAtom,
  QuestionCountAtom,
  QuestionNumberAtom,
} from '../lib/atoms/Quiz';
import { scoreAtom } from '../lib/atoms/Score';
import { ScoreTable } from '../lib/definitions';

export default function Quiz() {
  const [{ answered, correct }, setIsAnswered] = useAtom(AnswerStatusAtom);
  const [QuestionNumber, setQuestionNumber] = useAtom(QuestionNumberAtom);
  const QuestionCount = useAtomValue(QuestionCountAtom);
  const difficulty = useAtomValue(difficultyAtom);
  const setScore = useSetAtom(scoreAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (answered) {
      correct
        ? setScore(
            (prev) =>
              ScoreTable[difficulty as 'easy' | 'medium' | 'hard'] + prev
          )
        : setScore((prev) =>
            prev + ScoreTable.incorrect < 0 ? 0 : prev + ScoreTable.incorrect
          );
      setTimeout(() => {
        if (QuestionNumber === QuestionCount - 1) {
          setIsAnswered({ answered: false, correct: false });
          navigate('/trivia-game/score', { replace: true });
          return;
        }
        setQuestionNumber(QuestionNumber + 1);
        setIsAnswered((prev) => ({ ...prev, answered: false }));
      }, 5000);
    }
  }, [
    answered,
    QuestionCount,
    QuestionNumber,
    correct,
    difficulty,
    navigate,
    setIsAnswered,
    setQuestionNumber,
    setScore,
  ]);

  return (
    <PageContainer className="justify-evenly">
      <ProgressBar />
      <QuestionCard />
      <AnswerStatusBar />
      <AnswerGrid />
    </PageContainer>
  );
}
