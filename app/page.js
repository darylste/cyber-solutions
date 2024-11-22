import styles from './page.module.css';

import { Text, Logo } from './atomic/index';

export default function Home() {
  return (
    <div className={styles.page}>
      <Logo></Logo>
      <Text varient='body-lg'>Home</Text>
    </div>
  );
}
