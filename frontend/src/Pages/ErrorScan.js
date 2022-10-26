import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMsj: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true, errorMsj: error.message };
  }

  componentDidCatch(error) {
    console.log("Catch: " + error.message);
  }
  render() {
    if (this.state.error) {
      return <><p>{this.state.errorMsj}</p></>;
    }
    return this.props.children;
  }
}
export default Error
