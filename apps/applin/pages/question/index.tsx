import './index.module.scss';
import Link from 'next/link';
import Answers from '../../components/answers/answers';
import Page from '../../components/page/page';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface QuestionProps {}

export function Question(props: QuestionProps) {
  return (
    <Page>
      <div className="box">
        <div className="content text-center">
          <div className="font-display text-10xl leading-none -mt-28">
            <Image
              src={'/img/number-sign.svg'}
              width={72}
              height={109}
              alt="Hash sign next question number"
            />
            1
          </div>
          <p>
            I am very perceptive and I often find myself acting as a guardian,
            vigilant about keeping myself and others safe.
          </p>
          <Answers className="bottom-0 p-2" />

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

export default Question;
