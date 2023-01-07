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

  //Local states:
  //First name of the user
  const [firstName, setFirstName] = useState<string>("");

  const [barsChartInfo, setBarsChartInfo] = useState<any>("");

  useEffect(() => {
    const userInfos: any = generalInfoData.data?.data?.userInfos;

    const keyData: any = generalInfoData.data?.data?.keyData;

    setFirstName(userInfos?.firstName);
    setBarsChartInfo(keyData);
  });

  //Boolean condition to check if all the different data across all fetch requests are loaded
  const fetchedDataArray: any[] = [
    generalInfoData,
    activityInfoData,
    sessionsInfoData,
    performanceInfoData,
  ];

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
              {}

              <KeyDataCard dataType={"calorieCount"} test={barsChartInfo} />
              <KeyDataCard dataType={"proteinCount"} test={barsChartInfo} />
              <KeyDataCard
                dataType={"carbohydrateCount"}
                test={barsChartInfo}
              />
              <KeyDataCard dataType={"lipidCount"} test={barsChartInfo} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

// //Gets the data
// export async function getStaticProps() {
//   //We recover the userId through the URL parameters
//   let userId = 12;

//   //We initialise the app service which is going to make the API calls for us
//   const dataAppService = new AppService();

//   //Data for the: firstName, gauge chart and the "key data cards"
//   const generalInfoData = dataAppService.getUserInfo(userId).data;

//   //Data for the bars chart
//   const activityInfoData = dataAppService.getActivityInfo(userId).data;

//   //Data for the line chart
//   const sessionsInfoData = dataAppService.getSessionsInfo(userId).data;

//   //Data for the radar chart
//   const performanceInfoData = dataAppService.getPerformanceInfo(userId).data;

//   const fetchedDataArray: any[] = [
//     generalInfoData,
//     activityInfoData,
//     sessionsInfoData,
//     performanceInfoData,
//   ];

//   return { props: fetchedDataArray };
// }
