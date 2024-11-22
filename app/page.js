import styles from './page.module.css';

import { Header, Hero } from './atomic/index';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
    </div>
  );
}
