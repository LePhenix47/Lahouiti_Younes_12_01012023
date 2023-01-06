//React
import { useState, useMemo, useEffect } from "react";

//Next
import Head from "next/head";
import Script from "next/script";

//D3
import * as d3 from "d3";

//Components
import Chart from "../components/Chart/Chart";
import KeyDataCard from "../components/KeyDataCard/KeyDataCard";
import AppService from "../services/_app.service";
import SpinLoader from "../components/SpinLoader/SpinLoader";
import {
  getObjectProperties,
  getObjectValues,
} from "../react-utils/functions/helperFunctions";

// INFO: in Next.js, routes are automatically created whenever we add a new page
//⚠ VERY IMPORTANT: index.tsx → Main page at the route "/" must not have its name changed

export default function Home() {
  //We recover the userId through the URL parameters
  let userId = 12;

  //We initialise the app service which is going to make the API calls for us
  const dataAppService = new AppService();

  //Data for the: firstName, gauge chart and the "key data cards"
  const generalInfoData = dataAppService.getUserInfo(userId);

  //Data for the bars chart
  const activityInfoData = dataAppService.getActivityInfo(userId);

  //Data for the line chart
  const sessionsInfoData = dataAppService.getSessionsInfo(userId);

  //Data for the radar chart
  const performanceInfoData = dataAppService.getPerformanceInfo(userId);

  const fetchedDataArray = [
    generalInfoData,
    activityInfoData,
    sessionsInfoData,
    performanceInfoData,
  ];

  //Local states:
  //First name of the user
  const [firstName, setFirstName] = useState<string>("");

  //
  let keyValuesDataArray: any = [];
  let keyPropsDataArray: any = [];

  useEffect(() => {
    const keyData = generalInfoData.data?.data?.keyData;
    console.log(keyData);

    const userInfos = generalInfoData.data?.data?.userInfos;
    console.log(userInfos);

    const dataIsDefined: boolean = !!generalInfoData.data?.data;

    if (dataIsDefined) {
      setFirstName(userInfos?.firstName);
      keyValuesDataArray = getObjectValues(keyData);
      keyPropsDataArray = getObjectProperties(keyData);
    }
  });

  //Boolean condition to check if all the different data across all fetch requests are loaded
  const dataIsLoading: boolean = fetchedDataArray.some((fetchedData) => {
    return fetchedData.isLoading;
  });

  //If the data is loading then show the spin loader
  if (dataIsLoading) {
    return <SpinLoader />;
  }

  //Otherwise show the page
  return (
    <>
      {/*   
      Head
*/}

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
      </Head>

      {/* 
      
      Body:
      */}
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__greeting-sentence">
            Bonjour <span className="profile__name">{firstName}</span>
          </h1>
          <p className="profile__recap-sentence">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>

          <div className="profile__data-container">
            <section className="profile__charts-data">
              <Chart chartType="bar" data={""} />
              <Chart chartType="line" data={""} />
              <Chart chartType="radar" data={""} />
              <Chart chartType="gauge" data={""} />
            </section>
            <section className="profile__key-data">
              <KeyDataCard dataType={"calorieCount"} data={""} />
              <KeyDataCard dataType={"proteinCount"} data={""} />
              <KeyDataCard dataType={"carbohydrateCount"} data={""} />
              <KeyDataCard dataType={"lipidCount"} data={""} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
