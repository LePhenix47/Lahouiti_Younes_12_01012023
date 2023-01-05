//Next
import Head from "next/head";
import Script from "next/script";

//Components
import Chart from "../components/Chart/Chart";
import KeyDataCard from "../components/KeyDataCard/KeyDataCard";

// INFO: in Next.js, routes are automatically created whenever we add a new page
//⚠ VERY IMPORTANT: index.tsx → Main page at the route "/" must not have its name changed

export default function Home() {
  // console.log(d3);
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
      </Head>
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__greeting-sentence">
            Bonjour <span className="profile__name">Thomas</span>
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
              {/* 
              data.map((keyData)=>{
                keyData.map((typeAmount, index)=>{
                  //Props names → Object.getOwnPropertyNames(typeAmount)
                  const typeOfData = Object.properties(typeAmount)
                  <KeyDataCard cardType={typeAmount} key={`${typeAmount}-${index}`}/>
                })}
              })
              */}
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
