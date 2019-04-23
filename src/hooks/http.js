import {useState, useEffect} from "react"
import config from "../config"

export default function useHttp(path, dependencies) {
   const [isLoading, setIsLoading] = useState(false);
   const [fetchedData, setFetchedData] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);
      fetch(`${config.server}${path}`)
         .then(response => {
            setIsLoading(false);
            if (response.status === 200) {
               response.text().then((data) => setFetchedData(JSON.parse(data)));
            } else {
               setError(response.error)
            }
         })
         .catch(err => {
            setIsLoading(false);
            setError(err)
         });
   }, dependencies);

   return [isLoading, error, fetchedData]
}