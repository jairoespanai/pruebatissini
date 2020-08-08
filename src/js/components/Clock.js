import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    );
  }
};

function tick() {
      ReactDOM.render(<Clock/>, document.getElementById('container'));
}

setInterval(tick, 1000);