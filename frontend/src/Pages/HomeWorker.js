import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import Cookies from "universal-cookie";
import axios from "axios";
import QRCode from "react-qr-code";

const URL = "http://localhost:3500/points";
const cookies = new Cookies();

export default class HomeWorker extends Component {
  Logout = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("worker", { path: "/" });
    cookies.remove("Admin", { path: "/" });
    window.location.href = "./";
  };
  downloadQRCode = () => {
    const [qrValue, setQrValue] = useState("jeftar");
    const handleOnChange = (event) => {
      const { value } = event.target;
      setQrValue(value);
    };
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  componentDidMount() {
    if (!cookies.get("worker")) {
      window.location.href = "./";
    }
  }
  renderQR() {
    const root = ReactDOM.createRoot(document.getElementById("Render"));
    const element = (
      <div className="d-flex justify-content-center">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "50%", width: "50%" }}
          value={cookies.get("username")}
          viewBox={`0 0 256 256`}
        />
        <div className="container ">
          <button
            className="btn btn-outline-success"
            onClick={() => this.downloadQRCode()}
          >
            Download QR
          </button>
        </div>
      </div>
    );

    root.render(element);
  }
  render() {
    /*console.log(cookies.get("id"));
    console.log(cookies.get("name"));
    console.log(cookies.get("username"));
    console.log(cookies.get("range"));*/
    return (
      <div>
        <div className="container mt-3">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <h1>Hola {cookies.get("name")}</h1>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary mx-1"
                onClick={() => this.renderQR()}
              >
                QR
              </button>
              <button onClick={() => this.Logout()} className="btn btn-danger">
                Log-Out
              </button>
            </li>
          </ul>
        </div>
        <br />
        <div className="d-flex justify-content-center" id="Render"></div>
      </div>
    );
  }
}
