import Links from '../../common/components/links';
import styles from './layout.module.css'

export default function D02() {
  return (
    <div>
      <h1 className={styles.title}>D02</h1>
      <Links links={[
        {
          id: 'googlenews',
          url: 'https://news.google.com',
          title: 'GoogleNews',
          target: '_blank',
        },
        ]}/>
    </div>
  );
}