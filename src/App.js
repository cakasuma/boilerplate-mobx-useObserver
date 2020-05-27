import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "pages/home";
import Page2 from "pages/page-2";
import { useStores } from "stores";
import "./App.scss";

const App = () => {
  const { userStore } = useStores();

  React.useEffect(() => {
    userStore.init();
  }, []);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/page-2">
              <Page2 />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
