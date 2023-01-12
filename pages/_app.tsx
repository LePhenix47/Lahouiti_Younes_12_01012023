//SASS Styles
import "../styles/sass/main.scss";

//Next
import type { AppProps } from "next/app";

//Components
import Container from "../components/Container/Container";

//Utils
//Root component, every page created by Next.js will go through here
//Works like the ReactDOM.Render in Create React App

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
