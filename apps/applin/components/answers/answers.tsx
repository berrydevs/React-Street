import './answers.module.scss';

/* eslint-disable-next-line */
export interface AnswersProps {}

export function Answers(props: AnswersProps) {
  return (
    <div className='flex justify-between absolute sm:relative sm:max-w-md sm:mx-auto w-full left-0 p-2'>
      <button className="answer">Never</button>
      <button className="answer">Meh</button>
      <button className="answer">50/50</button>
      <button className="answer">Sure</button>
      <button className="answer">100%</button>
    </div>
  );
}

export default Answers;
