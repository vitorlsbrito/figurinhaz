import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#D90000" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;400;700;900&family=Libre+Barcode+EAN13+Text&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}