//React
import Head from "next/head";
import React from "react";

//Components
import WorkInProgress from "../components/WorkInProgress/WorkInProgress";

export default function ProfilePage(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="Profil" />
        {/*
         <!--Title--> 
         */}
        <title>Profil</title>

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
