import List from '../list/list';
import styles from './pricing-table.module.scss';

/* eslint-disable-next-line */
export interface PricingTableProps {}

export function PricingTable(props: PricingTableProps) {
  const pricingPlan = {
    planOne: [
      '1 meal per day',
      'Order times are between 11am and 9pm',
      'Delivery is free',
    ],
    planTwo: [
      '2 meals per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to latest recipes',
    ],
  };

  return (
    <section className="pricing">
      <div className="container ">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols">
        <div className="pricingPlan">
          <p className="planName">Starter</p>
          <p className="planPrice">
            <span>$</span>399
          </p>
          <p className="planText">per month. That&apos;s just $13 per meal!</p>
        </div>

        <List list={pricingPlan.planOne} />
      </div>
    </section>
  );
}

export default PricingTable;
