import React, {useState} from "react"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import useHttp from "../../hooks/http"

export function LandingPage() {
   const [gameId, setGameId] = useState('');
   const [finalGameId, setFinalGameId] = useState('');

   const [loading, error, data] = useHttp(`/services/racinginfo/v1/api/products/${finalGameId}`, [finalGameId]);

   function searchGameFormSubmit(e) {
      e.preventDefault();
      setFinalGameId(gameId)
   }

   function change(e) {
      setGameId(e.target.value)
   }

   if (error) {
      return <Error error={error}/>
   }

   if (loading) {
      return <Loading/>
   }

   console.log(data);

   return <form action="" onSubmit={searchGameFormSubmit}>
      <input id="gamedId" name="gamedId" onChange={change} value={gameId} type="text"/>
      <button>search</button>
   </form>
}

export default LandingPage