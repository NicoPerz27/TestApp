import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import axios from "axios"
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "",
    };
    this.handleScan = this.handleScan.bind(this);
  }
  
  async handleScan(data, e) {
    let datos = await JSON.stringify(data.text);
    this.setState({
      result: datos,
    });
    const res = await axios.post("http://localhost:3500/joins", {
        id: datos,
        time: Date.now
    })
    console.log(res)
    console.log(datos)
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}
