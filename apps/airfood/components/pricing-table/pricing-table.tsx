import Link from 'next/link';
import { PrimaryButton } from '../hero/hero';
import List from '../list/list';
import styles from './pricing-table.module.scss';

/* eslint-disable-next-line */
export interface PricingTableProps {}

export function PricingTable(props: PricingTableProps) {
  const pricingPlan = {
    planOne: [
      '1 meal per day',
      'Order times from 11am and 9pm',
      'Delivery is free',
      'Customized Meals per week',
    ],
    planTwo: [
      '2 meals per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to latest recipes',
    ],
  };

  return (
    <section className={styles.pricing}>
      <div className="container ">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary margin-bottom-md">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        {/* Pricing Card */}
        <div className={`${styles.pricingPlan} ${styles.pricingPlanStarter}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Starter</p>
            <p className={styles.planPrice}>
              <span>$</span>399
            </p>
            <p className={styles.planText}>
              per month. That&apos;s just $13 per meal!
            </p>
          </header>

          <List list={pricingPlan.planOne} />

          <div className={styles.planSignup}>
            <Link href="/" passHref>
              <PrimaryButton>Start eating well!</PrimaryButton>
            </Link>
          </div>
        </div>

        {/* Pricing Card */}
        <div className={`${styles.pricingPlan} ${styles.pricingPlanComplete}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Complete</p>
            <p className={styles.planPrice}>
              <span>$</span>649
            </p>
            <p className={styles.planText}>
              per month. That&apos;s just <strong>$11</strong> per meal!
            </p>
          </header>

          <List list={pricingPlan.planTwo} />

          <div className={styles.planSignup}>
            <Link href="/" passHref>
              <PrimaryButton>Start eating well!</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <aside className={styles.planDetails}>
          Prices include all applicable taxes. You can cancel at any time.
        </aside>
      </div>
    </section>
  );
}

export default PricingTable;
