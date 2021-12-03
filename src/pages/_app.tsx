import { AppProps } from 'next/app'
import '../styles/index.scss'
import { SessionProvider } from "next-auth/react"

import { Toolbar } from '../components/Toolbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Toolbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
