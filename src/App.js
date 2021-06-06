import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Welcome from "./layouts/Welcome";
import About from "./layouts/About";
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
        <main className="App">
          <Header />
          <Welcome />
          <About />
        </main>
        {/* <Loading /> */}
      </>
    );
  }
}

export default App;
