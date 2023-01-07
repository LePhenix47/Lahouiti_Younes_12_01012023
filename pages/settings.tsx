//React
import Head from "next/head";
import React from "react";

//Components
import WorkInProgress from "../components/WorkInProgress/WorkInProgress";

export default function Settings() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Réglages" />
        {/*
         <!--Title--> 
         */}
        <title>Réglages</title>

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
