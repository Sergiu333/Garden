import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>FoișorulMeu.md | Mobila la comanda</title>
                <meta
                    name="keywords"
                    content="Foișoare la comanda, leagane la comanda , leagane moldova , lucrari din lemn, constructii din lemn, pergole din lemn la comandă, foisoare, scrinciobe, foisoare din lemn idei , gratar, foisoare de gradina, mese de gradina, mese pentru mancat , mese in lemn , "
                />
                <meta
                    name="keywords"
                    content="Mese din lemn, mobilier din lemn, mese rustice, mese masive, mese de sufragerie, mese de bucătărie, mese din lemn masiv, mese din lemn natural, mese din lemn masiv de stejar, mese din lemn ecologic, mese din lemn durabil, mese tradiționale din lemn, mese contemporane din lemn, mese din lemn cu design personalizat, mese din lemn lacuit, mese din lemn tratat, mese din lemn cu finisaj natural, mese din lemn de mahon, mese din lemn exotice, mese din lemn reciclat."
                />
                <meta
                    name="keywords"
                    content="Foisoare din lemn, foisoare din lemn masiv, foisoare rustice, foisoare de grădină, foisoare din lemn de stejar, foisoare din lemn de sosnă, foisoare personalizate, foisoare la comandă, foisoare de lux, foisoare tradiționale, foisoare din lemn ecologic, foisoare durabile, foisoare din lemn cu finisaj natural, foisoare rezistente la intemperii, foisoare moderne, foisoare elegante, foisoare spațioase, foisoare funcționale, foisoare pentru relaxare în grădină, foisoare pentru evenimente și petreceri."
                />
                <meta
                    name="keywords"
                    content="Balansoare, balansoare din lemn, balansoare pentru grădină, balansoare pentru terasă, balansoare rustice, balansoare moderne, balansoare confortabile, balansoare cu design ergonomic, balansoare pentru interior, scrânciobe, scrânciobe din lemn, scrânciobe pentru copii, scrânciobe pentru adulți, scrânciobe cu design atrăgător, scrânciobe cu sistem de siguranță, scrânciobe reglabile în înălțime, leagăne, leagăne din lemn, leagăne pentru grădină, leagăne pentru copii."
                /> <meta
                    name="keywords"
                    content="Terasă din lemn, terasă de exterior din lemn, terasă din lemn masiv, terasă din lemn tratat, terasă din lemn de esență tare, terasă din lemn exotice, terasă din lemn durabil, terasă din lemn ecologic, terasă din lemn masiv de stejar, terasă din lemn masiv de brad, terasă din lemn masiv de pin, terasă din lemn cu finisaj natural, terasă din lemn cu tratament antiderapant, terasă din lemn cu aspect rustic, terasă din lemn cu design personalizat, terasă din lemn cu pardoseală din plăci de lemn, terasă din lemn suspendată, terasă din lemn de înaltă calitate, terasă din lemn rezistentă la intemperii, terasă din lemn pentru spații exterioare elegante."
                />
                <meta name="description" content="FoișorulMeu | Foisoare la comanda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#317EFB" />
                <link rel="icon" href="/foisoare.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/new.png" />
            </Head>
            <Component {...pageProps} />
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
        </>
    );
}
