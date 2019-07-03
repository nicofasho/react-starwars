import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { getStarships, getPilots, getPilotName } from "./services/sw-api";
import StarshipPage from "./pages/StarshipPage/StarshipPage";

class App extends Component {
  state = {
    ships: []
  };

  async componentDidMount() {
    let newStarships = await getStarships();
    newStarships.results.forEach(async ship => {
      let pilots = await getPilots(ship);
      if (pilots) {
        pilots.forEach(async pilot => {
          ship.pilots.push(await getPilotName(pilot).name);
        });
      } else {
        pilots = [];
        pilots.push('No known pilots for this ship');
      }
    });
    this.setState({
      ships: newStarships.results
    });
  }

  render() {
    let shipList = this.state.ships.map((ship, idx) => (
      <Link
        className="btn btn-primary ship-link"
        to={`starships/${idx}`}
        key={idx}
        ship={ship}
      >
        {ship.name}
      </Link>
    ));
    return (
      <div>
        <h1 className="text-center mt-5">Star Wahs Starships</h1>

        {this.state.ships.length ? (
          <Switch>
            <Route
              exact
              path="/"
              render={() => <div className="text-center mt-5">{shipList}</div>}
            />
            <Route
              exact
              path="/starships/:id"
              render={props => (
                <StarshipPage
                  {...props}
                  ship={this.state.ships[props.match.params.id]}
                />
              )}
            />
          </Switch>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
