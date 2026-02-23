import Links from '../common/components/links';
import styles from './layout.module.css'

export default function Home() {
  return (
  <>
      <h1 className={styles.title}>Index</h1>
      <Links links={[
        {
          id: 'd01',
          url: './d01',
          title: 'YtbLinks',
        },
        {
          id: 'd02',
          url: './d02',
          title: 'NewsLinks',
        },
        {
          id: 'd03',
          url: './d03',
          title: 'Other',
        }
      ]}/>
  </>
  );
}