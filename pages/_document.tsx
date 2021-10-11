import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <meta name="theme-color" content="#000000" />
          <title>Cryptaid | Auxílio eletrônico para o jogo Cryptid</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument