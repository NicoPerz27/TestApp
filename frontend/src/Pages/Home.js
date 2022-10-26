import React, { Component, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import QRScan from "./QRScan";
import ErrorBoundary from "./ErrorScan";
import ReactDOM from 'react-dom/client'

const URL = "http://localhost:3500/points";
const cookies = new Cookies();

export default class Home extends Component {
  state = {
    points: [],
  };

  returnData = async () => {};
  Logout = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("admin", { path: "/" });
    window.location.href = "./";
  };
  async componentDidMount() {
    if (!cookies.get("admin")) {
      window.location.href = "./";
    }
    const res = await axios.get(URL);
    this.setState({ points: res.data });
    console.log(this.state.points);
  }
  renderScan() {
    const root = document.querySelector("span")
    root.setAttribute("id", "Render")
    const Rend = ReactDOM.createRoot(document.getElementById("Render"))
    const element = <QRScan />;
    Rend.render(element);
  }
  
  render() {
    /*console.log(cookies.get("id"));
    console.log(cookies.get("name"));
    console.log(cookies.get("username"));
    console.log(cookies.get("admin"));*/
    return (
      <div>
        <div className="container mt-3">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <h1>Hola {cookies.get("name")}</h1>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success mx-1" onClick={()=> this.renderScan()}>Scan QR</button>
              <button onClick={() => this.Logout()} className="btn btn-danger">
                Log-Out
              </button>
            </li>
          </ul>
          <div className="container">
            <div className="container">
              <div className="container ps-5">
                {this.state.points.map((point) => (
                  <div className="card mt-2">
                    <div className="card-body">
                      <h5 className="card-title">{point.name}</h5>
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias optio at illum ut assumenda maiores
                        soluta quaerat sapiente perferendis vitae debitis
                        temporibus, praesentium veritatis exercitationem
                        corrupti dolores numquam eaque? Pariatur?
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ErrorBoundary>
                <div className="d-flex justify-content-center">
                  <span className="mt-4" id="Render">
                  </span>
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
