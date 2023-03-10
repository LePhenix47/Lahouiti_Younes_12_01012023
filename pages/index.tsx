//React
import { useState, useEffect } from "react";

//Next
import Head from "next/head";

//Components
import Chart from "../components/Chart/Chart";
import KeyDataCard from "../components/KeyDataCard/KeyDataCard";
import AppService from "../services/_app.service";
import SpinLoader from "../components/SpinLoader/SpinLoader";
import ApiError from "../components/ApiError/ApiError";

/**
 * Function component for the main page 

 *INFO: in Next.js, routes are automatically created whenever we add a new page
 *
 *⚠ VERY IMPORTANT: index.tsx → Main page at the route "/". 
 *The name of this file must NOT be changed ⚠
 *
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  let userId = 12;

  /*
    // App service
  */
  //We initialise the app service which is going to make the API calls for us
  const dataAppService: any = new AppService();

  //Data for the: firstName, gauge chart and the "key data cards"
  const generalInfoData: any = dataAppService.getUserInfo(userId);

  //Data for the bars chart
  const activityInfoData: any = dataAppService.getActivityInfo(userId);

  //Data for the line chart
  const sessionsInfoData: any = dataAppService.getSessionsInfo(userId);

  //Data for the radar chart
  const performanceInfoData: any = dataAppService.getPerformanceInfo(userId);

  /*
  //Local states:   
  */
  //First name of the user
  const [firstName, setFirstName] = useState<string>("");

  //Data for the
  const [keyCardData, setKeyCardData] = useState<any>("");

  //Data for the
  const [barsChartData, setBarsChartData] = useState<any>("");

  //Data for the line chart
  const [lineChartData, setLineChartData] = useState<any>("");

  //Data for the radar chart
  const [radarChartData, setRadarChartData] = useState<any>("");

  //Data for the gauge chart
  const [gaugeChartData, setGaugeChartData] = useState<any>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const userInfos: any = generalInfoData.data?.data?.userInfos;

    const keyData: any = generalInfoData.data?.data?.keyData;

    const gaugeData: any = generalInfoData.data?.data?.todayScore
      ? generalInfoData.data?.data?.todayScore
      : generalInfoData.data?.data?.score;

    const barsData: any = activityInfoData.data?.data;

    const lineData: any = sessionsInfoData.data?.data;

    const radarData: any = performanceInfoData.data?.data;

    setFirstName(userInfos?.firstName);

    setKeyCardData(keyData);

    setBarsChartData(barsData);

    setLineChartData(lineData);

    setRadarChartData(radarData);

    setGaugeChartData(gaugeData);
  });

  const fetchedDataArray: any[] = [
    generalInfoData,
    activityInfoData,
    sessionsInfoData,
    performanceInfoData,
  ];

  //Boolean condition to check if there was an issue when making the fetch request
  const dataHasError: boolean = fetchedDataArray.some((fetchedData) => {
    return fetchedData.hasError;
  });

  //If any of the fetch calls fails then show the API error on screen
  if (dataHasError) {
    const dataErrorMessage =
      fetchedDataArray[0]?.errorMessage ||
      fetchedDataArray[0]?.errorMessage.message;

    return <ApiError apiErrorMessage={dataErrorMessage} />;
  }

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
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bienvenue dans la page de profil de SportSee!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Accueil" />
        <meta
          property="og:description"
          content="Bienvenue dans la page de profil de SportSee!"
        />
        <meta property="og:image" content="/images/icons/sport-see-icon.png" />
        <meta property="og:url" content="www.sport-see.com" />

        {/*
         <!--Title--> 
         */}
        <title>Accueil</title>

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
              <Chart chartType="bar" chartData={barsChartData} />
              <Chart chartType="line" chartData={lineChartData} />
              <Chart chartType="radar" chartData={radarChartData} />
              <Chart chartType="gauge" chartData={gaugeChartData} />
            </section>

            <section className="profile__key-data">
              <KeyDataCard dataType="calorieCount" keyCardData={keyCardData} />
              <KeyDataCard dataType="proteinCount" keyCardData={keyCardData} />
              <KeyDataCard
                dataType="carbohydrateCount"
                keyCardData={keyCardData}
              />
              <KeyDataCard dataType="lipidCount" keyCardData={keyCardData} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
