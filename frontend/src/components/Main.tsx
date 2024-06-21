import styles from './Main.module.css';

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>Welcome to Your Investment App</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          magna sit amet dui finibus vestibulum. Donec ac viverra nisi.
        </p>
        {/* Additional introductory content */}
      </div>
    </section>
  );
};

export default Main;
