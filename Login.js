import React,{Component} from "react";
import axios from "axios";
import Toast from "../component/Toast";
import $ from "jquery";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    }
  }

  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  Login = (event) => {
    event.preventDefault();
    let url = "http://localhost/lapangan/public/login";
    let form = new FormData();
    form.append("username", this.state.username);
    form.append("password", this.state.password);

    axios.post(url, form)
    .then(response => {
      let logged = response.data.status;
      console.log(response.data)
      if (logged) {
        let role = localStorage.getItem("role")
        { role === "admin" ? window.location = "/lapangan" : window.location = "/lapangan"}
        this.setState({message: "Login Berhasil"});
        //menyimpan data token pada local storage
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("role", JSON.stringify(response.data.user.role));
        //menyimpan data login user ke local storage
        localStorage.setItem("id_user", JSON.stringify(response.data.user.id));
      } else {
        this.setState({message: "Login Gagal"});
      }
      $("#message").toast("show");
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <div className="container width"
      style={{width: 24 + "rem", paddingTop: 6 + "rem"}}>
      <h3 className="mt-4 text-center">Login</h3>
            <Toast id="message" autohide="false" title="informasi">
            {this.state.message}
            </Toast>
            <form onSubmit={this.Login} className="mt-4">
            <div className="form-group mt-4">
              <input type="username" className="form-control" name="username"
              placeholder="Username" value={this.state.username} onChange={this.bind}/>
              </div>
              <div className="form-group mt-4">
              <input type="password" className="form-control" name="password"
              placeholder="password" value={this.state.password} onChange={this.bind}/>
              </div>
              <button type="submit" className="btn btn-block btn-primary">Login</button>
              </form>
              <p className="text-center mt-2">Don't have an account?
              <Link to="/register">Register</Link></p>
          </div>
    );
  }
}
export default Login;
