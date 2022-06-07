import "./App.css";
import { React, Component } from "react";
import { Homepage } from "./Component/homepage/homepage.component";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
