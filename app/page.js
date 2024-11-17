import styles from './page.module.css';

import { Text } from '@/atomic';

export default function Home() {
  return (
    <div className={styles.page}>
      <Text varient='h1'>Cyber Solution</Text>
      <p>Cyber Solutions</p>
    </div>
  );
}
