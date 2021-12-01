import styles from './styles.module.scss'
import Image from 'next/Image';
import { Button } from '../Button';

export function Toolbar() {
  return (
    <header className={styles.toolbarContainer}>
      <div className={styles.toolbarContent}>
        <Image
          src="/images/logo.svg" 
          alt="logo"
          height={48}
          width={`100%`}
        />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>

        <Button />
      </div>
    </header>
  )
}