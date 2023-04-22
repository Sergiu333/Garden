import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>RapidMobil | Mobila la comanda</title>
      <meta name="keywords" content="Fosiare la comanda, leagane la comanda , leagane moldova , lucrari din lemn"/>
      <meta name="description" content="Foisoare | Foisoare la comanda"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/foisoare.ico"/>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/new.png" />
    </Head>
    <Component {...pageProps} />
  </>
}
