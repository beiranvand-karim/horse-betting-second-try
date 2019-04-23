import React, {Component} from "react"
import config from "../../config"
import Error from "../../components/Error"
import Loading from "../../components/Loading"

export class LandingPage extends Component {
   constructor(props) {
      super(props);
      this.fetchData = this.fetchData.bind(this);
      this.searchGameFormSubmit = this.searchGameFormSubmit.bind(this);
      this.change = this.change.bind(this);
   }

   state = {
      data: null,
      loading: false,
      error: null,
      gameId: ''
   };

   searchGameFormSubmit(e) {
      e.preventDefault();
      this.fetchData(this.state.gameId);
   }

   change(e) {
      this.setState({
         gameId: e.target.value
      })
   };

   fetchData(gameId) {
      this.setState({loading: true});
      fetch(`${config.server}/services/racinginfo/v1/api/products/${gameId}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         }
      })
         .then(response => {
            if (response.status === 200) {
               this.setState({loading: false});
               response.text().then((data) => this.setState({data: JSON.parse(data)}));
               this.setState({data: response})
            } else {
               this.setState({loading: false});
               this.setState({error: response.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   render() {
      const {gameId, error, loading} = this.state;
      if (error) {
         return <Error error={error}/>
      }

      if (loading) {
         return <Loading/>
      }

      return <form action="" onSubmit={this.searchGameFormSubmit}>
         <input id="gamedId" name="gamedId" onChange={this.change} value={gameId} type="text"/>
         <button>search</button>
      </form>

   }
}

export default LandingPage