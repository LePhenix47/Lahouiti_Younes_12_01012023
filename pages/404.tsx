//React
import React from "react";

//Next
import Head from "next/head";
import Link from "next/link";

/**
 *Page shown when the route path does not exist
 * @returns {JSX.Element}
 */
export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Erreur 404" />
        {/*
         <!--Title--> 
         */}
        <title>Erreur 404</title>

        {/*
         <!--Page logo--> 
        */}
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/sport-see-icon.png"
        />
      </Head>
      <main className="error-404">
        <h1 className="error-404__title">❌ Erreur 404 ❌</h1>
        <h2 className="error-404__subtitle">Page non-trouvée ¯\_(ツ)_/¯</h2>

        <Link href="/" className="error-404__link">
          Revenir à la page d'accueil?
        </Link>
      </main>
    </>
  );
}
