import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username: [],
            email: "",
            password: "",
            repassword: "",
            role: "",
            action: "",
            find: "",
            message: "",
        }
    }

    bind = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    Save = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.repassword)
        {
            let url = "http://localhost/lapangan/public/register";
            let form = new FormData();
            form.append("username", this.state.username)
            form.append("email", this.state.email)
            form.append("password", this.state.password)
            axios.post(url, form)
            .then(response => {
                this.setState({message: response.data.message})
                this.get_user()
            })
            .catch(error => {
            });
            window.location = "/login";
        }
        else {
            window.location = "/register";
        }
    }
    render(){
        return(
            <div className="container width"
            style={{width: 24 + "rem", paddingTop: 6 + "rem"}}>
            <h3 className="mt-4 text-center">Register</h3>
            <form onSubmit={this.Save}>
            <input type="text" className="form-control mt-4" name="username" placeholder="Username"
            value={this.state.name}
            onChange={this.bind} required />

            <input type="email" className="form-control mt-4" name="email" 
            placeholder="Email" value={this.state.email}
            onChange={this.bind} required />

            <input type="password" className="form-control mt-4" name="password" 
            placeholder="Password" value={this.state.password}
            onChange={this.bind} required />

            <input type="password" className="form-control mt-4" name="repassword" 
            placeholder="Ulang Password" value={this.state.repassword}
            onChange={this.bind} required />

            <button type="submit" className="btn btn-block btn-primary mt-4">Register</button>
            </form>
            <p className="text-center mt-2">Already have an account? <Link to="/">Login</Link></p>
            </div>
        )
    }
}
export default Register;