import React, { Component } from "react";
import Routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
