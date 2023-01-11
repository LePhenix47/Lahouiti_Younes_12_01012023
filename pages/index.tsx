//React
import { useState, useEffect } from "react";

//Next
import Head from "next/head";

//Components
import Chart from "../components/Chart/Chart";
import KeyDataCard from "../components/KeyDataCard/KeyDataCard";
import AppService from "../services/_app.service";
import SpinLoader from "../components/SpinLoader/SpinLoader";

// INFO: in Next.js, routes are automatically created whenever we add a new page
//⚠ VERY IMPORTANT: index.tsx → Main page at the route "/" must not have its name changed

export default function Home() {
  //We recover the userId through the URL parameters
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
