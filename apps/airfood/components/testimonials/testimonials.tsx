import TestimonialCard from '../testimonial-card/testimonial-card';
import styles from './testimonials.module.scss';

/* eslint-disable-next-line */
export interface TestimonialsProps {}

export function Testimonials(props: TestimonialsProps) {
  return (
    <section className={`grid grid--2-cols ${styles.sectionTestimonials}`}>
      <div className="testimonialContainer">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>

        <div className={styles.testimonials}>
          <TestimonialCard
            review="Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
            name="Dave Bryson"
            image="dave.jpg"
          />

          <TestimonialCard
            review="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore! "
            name="Ben Hadley"
            image="ben.jpg"
          />

          <TestimonialCard
            review="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
            name="Steve Miller"
            image="steve.jpg"
          />

          <TestimonialCard
            review="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic. "
            name="Hannah Smith"
            image="hannah.jpg"
          />
        </div>
      </div>

      <div className={styles.gallery}>Gallery</div>
    </section>
  );
}

export default Testimonials;
