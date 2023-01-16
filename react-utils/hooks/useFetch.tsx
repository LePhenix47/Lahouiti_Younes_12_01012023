import { useState, useEffect } from "react";

export function useFetch(url: string): {
  data: any;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
} {
  const [data, setData] = useState<any>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [hasError, setError] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");

  //Will execute once and also everytime the url changes
  useEffect(() => {
    //We need the controller in case we make multiple successions of fetch requests
    const controller: AbortController = new AbortController();

    setLoading(true);
    if (!url) {
      return;
    }

    async function fetchData() {
      try {
        const response: Response = await fetch(url);

        const dataFromFetch: any = await response.json();

        setData(dataFromFetch);
      } catch (APIError: any) {
        setErrorMessage(APIError);

        console.error(
          `⚠ API Error found! An unexpected error has occured while attempting to make a call to the API → ${APIError} ⚠`
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    //In case we make multiple fetch requests → we abort the rest of them if one fail or is out of sync
    return () => {
      //This function will ONLY execute if the component who made the fetch request has been unmounted from the DOM
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, hasError, errorMessage };
}
