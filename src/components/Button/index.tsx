import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function Button() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button className={styles.signIn} type="button">
      <FaGithub color="#04d361"/>
      Thauã Borges
      <FiX color="#737380" />
    </button>
  ) : (
    <button className={styles.signIn} type="button">
      <FaGithub color="#ebcb17"/>
      Sign in with Github
    </button>
  );
}