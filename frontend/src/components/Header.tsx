// components/Header.tsx

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Your Investment App</h1>
      {/* Other header content */}
    </header>
  );
};

export default Header;
