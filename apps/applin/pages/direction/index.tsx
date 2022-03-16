import Link from 'next/link';
import Answers from '../../components/answers/answers';
import Page from '../../components/page/page';
import './index.module.scss';

/* eslint-disable-next-line */
export interface DirectionProps {}

export function Direction(props: DirectionProps) {
  const test = '1'
  return (
    <Page>
      <div className="box">
        <div className="content text-center">
          <h3 className="uppercase tracking-wider mb-2">Instructions</h3>
          <h1 className="page-title">It&apos;s easy</h1>
          <p>Answer the following questions with:</p>
          <Answers />

          <div className="button relative mx-auto w-44 top-32 md:top-20">
            <Link href={'/questions'}>
              <a className="button-text no-underline">Start</a>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}
console.log("🚀 ~ file: index.tsx ~ line 31 ~ Direction ~ test", test)

export default Direction;
