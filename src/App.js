import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Welcome from "./layouts/Welcome";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/loading";

class App extends React.Component {
  state = {
    showLoadingScreen: false,
  };

  componentDidMount() {
    this.setState({ showLoadingScreen: true });
    setTimeout(() => {
      this.setState({ showLoadingScreen: false });
    }, 6000);
  }
  render() {
    return (
      <>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Welcome} />
          </Switch>
          {/* <div className="cursor1"></div> */}
          {/* <div className="cursor2"></div> */}
        </div>
        {/* <Loading /> */}
      </>
    );
  }
}

export default App;
