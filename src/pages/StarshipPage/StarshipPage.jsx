import React, { Component } from "react";
import { Link } from "react-router-dom";

class StarshipPage extends Component {
  render() {
    const { name, model } = this.props.ship;
    return (
      <div>
        <h1>{name}</h1>
        <h3>Model: {model}</h3>
        <Link to="/">Return to Starship List</Link>
      </div>
    );
  }
}

export default StarshipPage;
