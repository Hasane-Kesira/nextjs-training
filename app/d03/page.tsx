import Links from '../../common/components/links';
import styles from './layout.module.css'

export default function D03() {
  return (
    <div>
      <h1 className={styles.title}>D03</h1>
      <Links links={[
        {
          id: 'gmail',
          url: 'https://gmail.com',
          title: 'Gmail',
          target: '_blank',
        },
        ]}/>
    </div>
  );
}