import "../Styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const URL = "http://localhost:3500/users";
const cookies = new Cookies();

export default class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  LogIn = async () => {
    await axios
      .get(URL, {
        params: {
          username: this.state.form.username,
          password: md5(this.state.form.password),
        },
      })
      .then((Response) => {
        return Response.data;
      })
      .then((Response) => {
        if (Response.length > 0) {
          var res = Response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("name", res.name, { path: "/" });
          cookies.set("username", res.username, { path: "/" });
          cookies.set("admin", res.admin, { path: "/" });
          alert("Welcome " + res.name);
          if (res.admin) {
            window.location.href = "./Admin";
          } else {
            cookies.set("worker", res.worker, { path: "/"})
            window.location.href = "./Worker";
          }
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    cookies.remove("admin", {path:"/"})
    cookies.remove("worker", {path:"/"})
  }
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña:</label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={() => this.LogIn()}>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    );
  }
}
