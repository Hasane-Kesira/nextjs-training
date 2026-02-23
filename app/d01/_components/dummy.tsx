import clsx from 'clsx';
import styles from './layout.module.css'

/*
className='([^\s　]+)'
className={clsx(styles['$1'])}


className='([^\s　]+)\s+([^\s　]+)'
className={clsx(styles['$1'], styles['$2'])}


className='([^\s　]+)\s+([^\s　]+)\s+([^\s　]+)'
className={clsx(styles['$1'], styles['$2'], styles['$3'])}
*/
export default function Dummy({ children }: { children: React.ReactNode }) {
  return (
        <div className={clsx(styles['container'])}>
            <div className={clsx(styles['new'])}>{children}</div>
            <div className={clsx(styles['sample'])}>
                <span className={clsx(styles['sample2'])}></span>
            </div>
            <div className={clsx(styles['sample'], styles['new'])}>
                <span className={clsx(styles['sample2'], styles['old'])}></span>
            </div>
            <div className={clsx(styles['sample'], styles['new'])}>
                <span className={clsx(styles['sample2'], styles['old'], styles['span'])}></span>
            </div>
        </div>
  );
}