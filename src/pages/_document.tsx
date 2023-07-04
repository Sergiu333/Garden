import {Html, Head, Main, NextScript} from 'next/document';
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
