//SASS Styles
import "../styles/sass/main.scss";

//Next
import type { AppProps } from "next/app";

//Components
import Container from "../components/Container/Container";
import { Head } from "next/document";

//Next

//Utils
//Root component, every page created by Next.js will go through here
//Works like the ReactDOM.Render in Create React App

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />
      </Head>

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
