import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FoișorulMeu.md | Mobila la comanda</title>
        <meta
          name="keywords"
          content="Foișoare la comanda, leagane la comanda , leagane moldova , lucrari din lemn"
        />
        <meta name="description" content="FoișorulMeu | Foisoare la comanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#317EFB"/>
        <link rel="icon" href="/foisoare.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/new.png" />
          <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
          />
          <Script id="ga-script" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
                 `}
          </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
