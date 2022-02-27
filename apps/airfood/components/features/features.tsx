import Feature from '../feature/feature';
import styles from './features.module.scss';

/* eslint-disable-next-line */
export interface FeaturesProps {}

export function Features(props: FeaturesProps) {
  const features = [
    {
      title: 'Never cook again!',
      content:
        'Our subscriptions cover 365 days per year, even including major holidays.',
      icon: 'infinite-outline',
    },
    {
      title: 'Local and organic',
      content:
        'Our cooks only use local, fresh, and organic products to prepare your meals.',
      icon: 'nutrition-outline',
    },
    {
      title: 'No waste',
      content:
        'All our partners only use reusable containers to package all your meals.',
      icon: 'leaf-outline',
    },
    {
      title: 'Pause anytime',
      content:
        'Going on vacation? Just pause your subscription, and we refund unused days.',
      icon: 'pause-outline',
    },
  ];
  return (
    <div className={`container grid grid--4-cols ${styles.features}`}>
      {features.map((feature) => (
        <Feature
          key={feature.title}
          title={feature.title}
          content={feature.content}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

export default Features;
