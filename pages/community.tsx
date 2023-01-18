//React
import Head from "next/head";
import React from "react";

//Components
import WorkInProgress from "../components/WorkInProgress/WorkInProgress";

/**
 * Page for the community tab
 * @returns {JSX.Element}
 */
export default function Community(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="Communauté" />
        {/*
         <!--Title--> 
         */}
        <title>Communauté</title>

        {/*
         <!--Page logo--> 
        */}
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/sport-see-icon.png"
        />
      </Head>
      <WorkInProgress />
    </>
  );
}
