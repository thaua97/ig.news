import styles from './styles.module.scss'
import Image from 'next/Image';

export function Toolbar() {
  return (
    <header className={styles.toolbarContainer}>
      <div className={styles.toolbarContent}>
        <img 
          src="/images/logo.svg" 
          alt="logo" 
        />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  )
}