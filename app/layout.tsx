import clsx from 'clsx';

import Homeward from '../common/components/homeward';
import LikeButton from '../common/components/button';
import DayWeek from '../common/components/dayweek';
import DebugContainer from '../common/components/debugcontainer';
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(styles['container'])}>
        <header className={styles.header}>
          <div className={styles.hw1}>
            <div className={styles.hw2}>
              <Homeward/>
            </div>
          </div>
          <DayWeek/>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}><LikeButton /><DebugContainer /></footer>
      </body>
    </html>
  );
}
