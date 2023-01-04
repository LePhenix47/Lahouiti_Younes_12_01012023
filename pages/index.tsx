import Head from "next/head";
import Script from "next/script";

//Index.tsx → Main page at the route "/"
// ⚠ VERY IMPORTANT: in Next.js, routes are automatically created whenever we add a new page

export default function Home() {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />
        <meta
          name="description"
          content="Bienvenue dans la page de profil de SportSee!"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="SportSee" />
        <meta
          property="og:description"
          content="Bienvenue dans la page de profil de SportSee!"
        />
        <meta property="og:image" content="/images/icons/sport-see-icon.png" />
        <meta property="og:url" content="www.sport-see.com" />

        {/*
         <!--Title--> 
         */}
        <title>SportSee</title>

        {/*
         <!--Page logo--> 
        */}
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/sport-see-icon.png"
        />

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
      <main>
        <h1 className="test">Test </h1>
      </main>
    </>
  );
}
