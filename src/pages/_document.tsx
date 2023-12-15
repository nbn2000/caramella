import { Html, Head, Main, NextScript } from 'next/document'
import { HelmetProvider } from 'react-helmet-async'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
