import styles from './page.module.css';

import { Text, Logo, Nav, Header } from './atomic/index';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
