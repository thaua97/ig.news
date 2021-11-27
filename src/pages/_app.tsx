import { AppProps } from 'next/app'
import '../styles/index.scss'

import { Toolbar } from '../components/Toolbar';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Toolbar></Toolbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
