import './index.module.scss';
import Link from 'next/link';
import Page from '../../components/page/page';
/* eslint-disable-next-line */
export interface WhatIsProps {}

export function WhatIs(props: WhatIsProps) {
  return (
    <Page>
      <div className="card">
        <h1 className="page-title -mt-16 ">What is the Enneagram?</h1>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias,
            vel facere ad quis placeat ipsam sed eveniet incidunt corrupti
            exercitationem iure maxime optio architecto voluptas dolores
            excepturi similique provident!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias,
            vel facere ad quis placeat ipsam sed eveniet incidunt corrupti
            exercitationem iure maxime optio architecto voluptas dolores
            excepturi similique provident!
          </p>
        </div>
      </div>
    </Page>
  );
}

export default WhatIs;
