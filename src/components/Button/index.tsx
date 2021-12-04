import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from "next-auth/react"

export function Button() {
  const { data: session } = useSession();

  return session ? (
    <button className={styles.signIn} type="button">
      <FaGithub color="#04d361"/>
      {session?.user?.name}
      <FiX color="#737380" onClick={() => signOut()}/>
    </button>
  ) : (
    <button 
      className={styles.signIn} 
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#ebcb17"/>
      Sign in with Github
    </button>
  );
}