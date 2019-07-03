import React, { Component } from "react";
import { Link } from "react-router-dom";

class StarshipPage extends Component {

  render() {
    const { name, model, pilots } = this.props.ship;
    return (
      <div className="container">
        <h2 className="mt-5">{name}</h2>
        <p>Model: {model}</p>
        <ul>
        {pilots.map(pilot => <li>{pilot}</li>)}
        </ul>
        <Link to="/">Return to Starship List</Link>
      </div>
    );
  }
}

export default StarshipPage;
