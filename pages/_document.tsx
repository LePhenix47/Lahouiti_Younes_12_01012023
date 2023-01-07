//Next
import { Html, Head, Main, NextScript } from "next/document";

//A custom Document can update the <html> and <body> tags used to render a Page
export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />

        {/*     
        <!-- Fonts -->
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
