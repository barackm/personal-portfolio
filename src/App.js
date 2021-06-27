import React from "react";
import Header from "./components/Header";
import "./assets/css/main.css";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

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
          <Home />
          <Work />
          <About />
          <Portfolio />
          <Contact />
          {/* <Footer /> */}
        </main>
        {/* <Loading /> */}
      </>
    );
  }
}

export default App;
