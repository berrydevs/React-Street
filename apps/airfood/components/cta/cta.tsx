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

            <form
              method="POST"
              name="meal-sign-up"
              className={styles.ctaForm}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div>
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Jane Mice"
                  required
                  name="full-name"
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="jane@myshacode.com"
                  required
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" required name="select-where">
                  <option value="">Please choose one option</option>
                  <option value="Friends">Friends or Family</option>
                  <option value="Internet">Internet</option>
                  <option value="Other">Others</option>
                </select>
              </div>

              <button className={`${styles.btn} btn btn--form`} type="submit">
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
