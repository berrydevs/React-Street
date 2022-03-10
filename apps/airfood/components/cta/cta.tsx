import styles from './cta.module.scss';

/* eslint-disable-next-line */
export interface CtaProps {}

export function Cta(props: CtaProps) {
  return (
    <div className={styles.sectionCta} id="cta">
      <div className={`container `}>
        <div className={styles.cta}>
          <div className={styles.textBox}>
            <h2 className="heading-secondary .margin-bottom-md">
              Get your first meal for free!
            </h2>
            <p className={styles.text}>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form action="#" className={styles.ctaForm}>
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Jane Mice"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="jane@myshacode.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select name="" id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="Friends">Friends or Family</option>
                  <option value="Internet">Internet</option>
                  <option value="Other">Others</option>
                </select>
              </div>

              <button className={`${styles.btn} btn btn--form`}>
                Sign up now
              </button>
            </form>
          </div>
          <div
            className={styles.imageBox}
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
