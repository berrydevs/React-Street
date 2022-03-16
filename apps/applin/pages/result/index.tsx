import './index.module.scss';
import Link from 'next/link';
import Page from '../../components/page/page';
import Image from 'next/image';
import Diagram from '../../components/diagram/diagram';
/* eslint-disable-next-line */
export interface ResultProps {}

export function Result(props: ResultProps) {
  return (
    <Page>
      <div className="box">
        <div className="content text-center">
          <div className="page-title leading-none -mt-28">
            <div className="font-handwriting text-6xl w-full text-left -mb-4 relative -left-10">
              Hello
            </div>
            Three
          </div>
          <div className="max-w-md mx-auto mb-5">
            <Diagram />
          </div>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis iure
            optio animi cumque, amet sed aliquid autem, beatae nam perferendis
            voluptatem molestias tempora nostrum similique! Provident ratione in
            eligendi ex!
          </p>
        </div>
      </div>
    </Page>
  );
}

export default Result;
