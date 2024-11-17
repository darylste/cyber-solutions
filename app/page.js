import styles from './page.module.css';

import { Text } from '@/atomic';

export default function Home() {
  return (
    <div className={styles.page}>
      <Text varient='body-lg'>Home</Text>
    </div>
  );
}
