// components/Features.tsx

import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h3>Access Your Savings 24/7</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          magna sit amet dui finibus vestibulum.
        </p>
      </div>
      <div className={styles.feature}>
        <h3>Investment Suggestions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          magna sit amet dui finibus vestibulum.
        </p>
      </div>
      <div className={styles.feature}>
        <h3>Diversify Your Portfolio</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          magna sit amet dui finibus vestibulum.
        </p>
      </div>
    </section>
  );
};

export default Features;
