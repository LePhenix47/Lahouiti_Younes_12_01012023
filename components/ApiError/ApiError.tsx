import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

/**
 *Function component to display the error message of the API
 * @param {any} apiErrorMessage Error message from the API
 * @returns {JSX.Element}
 */
export default function ApiError({ apiErrorMessage }: any): JSX.Element {
  const errorMessage = apiErrorMessage?.message || apiErrorMessage;

  const router = useRouter();

  /**
  //Function that reloads the page
   * 
  @returns {void}
   */
  function refreshPage(): void {
    router.reload();
  }

  return (
    <>
      <Head>
        {/*
         <!--Title--> 
         */}
        <title>Erreur Serveur!</title>

        {/*
         <!--Page logo--> 
        */}
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/sport-see-icon.png"
        />
      </Head>
      <section className="api-error">
        <h1 className="api-error__title">Aïe !</h1>
        <h2 className="api-error__subtitle">
          Nous avons eu une erreur inattendue de la part du serveur
          <br />
          {"(╯°□°）╯︵ ┻━┻"}
        </h2>
        <p className="api-error__message">
          <strong className="api-error__message--strong">Erreur:</strong>
          <br />"{errorMessage}"
        </p>

        <button
          className="api-error__refresh-page-button"
          onClick={() => {
            refreshPage();
          }}
        >
          Rafraîchir la page?
        </button>
      </section>
    </>
  );
}
