import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Dashboard from "/Dashboard.js";
import "./styles.css";

class App extends Component {
  state = {
    userData: [
      {
        firstname: "Juan",
        lastname: "De la Cruz",
        age: 21
      },
      {
        firstname: "Mark",
        lastname: "Paul",
        age: 22
      },
      {
        firstname: "Paul",
        lastname: "Mark",
        age: 23
      }
    ]
  };

  renderItems = () => {
    const data = this.state.userData;

    const mapRows = data.map((item, index) => (
      <div>
        <div key={item.id}>
          <li>
            <span style={{ backgroundColor: "green" }}>
              firstname : {item.firstname}
            </span>
            <span style={{ backgroundColor: "aqua" }}>
              , lastname: {item.lastname}
            </span>
            <span style={{ backgroundColor: "orange" }}>, age: {item.age}</span>
          </li>
        </div>
      </div>
    ));
    return mapRows;
  };

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
