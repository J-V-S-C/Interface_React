import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle.js";
import history from "./services/history";


function App() {
  return (
    <>
    <Router history={history}>
      <Routes/>
      <GlobalStyle/>
    </Router>
    </>
  
  );
}

export default App;
