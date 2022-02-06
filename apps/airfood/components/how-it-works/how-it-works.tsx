import './how-it-works.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface HowItWorksProps {}

export function HowItWorks(props: HowItWorksProps) {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols">
        {/* Step 1 */}
        <div className="step-text-box">
          <p className="step-numer">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>

          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>

        <div className="step-img-box">
          <Image
            src={'/static/img/app/app-screen-1.png'}
            className="logo"
            alt="iPhone app preferences selection screen"
            width={150}
            height={23}
          />
        </div>

        {/* Step 2 */}
        <div className="step-img-box">
          <Image
            src={'/static/img/app/app-screen-2.png'}
            className="logo"
            alt="iPhone app meal approving plan screen"
            width={150}
            height={23}
          />
        </div>

        <div className="step-text-box">
          <p className="step-numer">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>

          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="step-text-box">
          <p className="step-numer">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>

          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>

        <div className="step-img-box">
          <Image
            src={'/static/img/app/app-screen-3.png'}
            className="logo"
            alt="iPhone app delivery screen"
            width={150}
            height={23}
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
