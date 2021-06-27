import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  state = {
    showLoadingScreen: false,
  };
  componentDidMount() {
    this.setState({ showLoadingScreen: true });
    setTimeout(() => {
      this.setState({ showLoadingScreen: false });
    }, 5000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
