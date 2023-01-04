//Next
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

//A custom Document can update the <html> and <body> tags used to render a Page
export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/*     
        <!-- Fonts -->
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />

        {/*    
          <!--Third-party scripts--> 
              */}
        {/*    
              <!--D3 packages--> 
                  */}
        <Script src="https://cdn.jsdelivr.net/npm/d3@7" defer></Script>
        <Script src="https://cdn.jsdelivr.net/npm/d3-scale@4" defer></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
