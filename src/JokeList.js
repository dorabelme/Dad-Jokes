import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import uuid from "uuid/v4";
import "./JokeList.css";

class JokeList extends Component {
  render() {
    return (
      <div>
        <h1>Dad Jokes</h1>
      </div>
    )
  }
}


export default JokeList;
