import React from "react"

export const SearchGame = (props) => {
   return <form action="" onSubmit={props.searchGameFormSubmit}>
      <input id="gamedId" name="gamedId" onChange={props.change} value={props.gameId} type="text"/>
      <button>search</button>
   </form>
};
export default SearchGame