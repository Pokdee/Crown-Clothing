import "./App.css";
import { React, Component } from "react";
import { Directory } from "./Component/homepage/directory.component.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useMatch,
  useParams,
  useLocation,
} from "react-router-dom";

const App = function () {
  return (
    <Router>
      <div className="app">
        <Directory />
      </div>
    </Router>
  );
};

export default App;
