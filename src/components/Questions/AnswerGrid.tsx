import AnswerButton from './AnswerButton';

export default function AnswerGrid() {
  return (
    <div className="-mt-5 relative mx-8 grid grid-cols-1 gap-8 md:bottom-10 md:mx-20 md:mt-0 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
      {Array.from({ length: 4 }, (_, index) => (
        <AnswerButton index={index} key={index} />
      ))}
    </div>
  );
}
