import './index.module.scss';
import Link from 'next/link';
import Page from '../../components/page/page';
/* eslint-disable-next-line */
export interface TermsAndConditionsProps {}

export function TermsAndConditions(props: TermsAndConditionsProps) {
  return (
    <Page>
      <div className="card">
        <h1 className="page-title -mt-16 ">Terms &amp; Conditions</h1>

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

export default TermsAndConditions;
