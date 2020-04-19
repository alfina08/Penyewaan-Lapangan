import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super()
        this.navGuest = this.navGuest.bind(this)
    }
    Logout = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        window.location = "/";
    }
    navGuest = () => {
        return(
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbarnav">
            <li className="nav-item ">
            <Link to="/Lapangan" className="nav-item nav-link text-light mr-4">Lapangan</Link>
            </li>
            </ul>
            </div>
        )
    }
    navAdmin = () => {
        return(
            <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
            <li className="nav-item ">
            <Link to="/produk" className="nav-item nav-link text-light mr-3">Produk</Link>
            </li>
            <li className="nav-item ">
            <Link to="/user" className="nav-item nav-link text-light mr-4">User</Link>
            </li>
            <li className="nav-item ">
            <Link to="/profil" className="nav-item nav-link text-light mr-4">Profil</Link>
            </li>
            <li className="nav-item ">
            <a className="nav-item nav-link text-light mr-4" onClick={this.Logout}>Logout</a>
            </li>
            </ul>
            </div>
        )
    }
    navUser = () => {
        return(
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item ">
            <Link to="/lapangan" className="nav-item nav-link text-light mr-4">Lapangan</Link>
            </li>
            <li className="nav-item ">
            <Link to="/user" className="nav-item nav-link text-light mr-4">User</Link>
            </li>
            <li className="nav-item ">
            <Link to="/profil" className="nav-item nav-link text-light mr-4">Profil</Link>
            </li>
            <li className="nav-item ">
            <a className="nav-item nav-link text-light mr-4" onClick={this.Logout}>Logout</a>
            </li>
            </ul>
            </div>
        )
    }
    render(){
        let auth = localStorage.getItem("Token")
        let role = localStorage.getItem("role")
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand ml-5 text-white" href="#">Moklet'Sport</a>
            <button className="navbar-toggler btn-light" type="button" data-toggler="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            { !auth ? this.navGuest() : role === "admin" ? this.navAdmin() : this.navUser() }
            </nav>
            </div>
        );
    }
}
export default Navbar;