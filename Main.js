import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
// load Navbar
import Navbar from "./component/Navbar";
// Load halaman
import Lapangan from "./page/Lapangan";
import User from "./page/User";
import Produk from "./client/Produk";
import Cart from "./client/Cart";
import Profil from "./page/Profil";
import Register from "./client/Register";
import Login from "./client/Login";
import Order from "./page/Order";
import Checkout from "./page/Checkout";



class Main extends Component{
    render = () => {
        return(
            <Switch>
                {/* Load component tiap halaman */}
                <Route path="/lapangan">
                    <Navbar />
                    <Lapangan />
                </Route>

                <Route path="/user">
                    <Navbar />
                    <User />
                </Route>

                <Route path="/Client">
                    <Navbar />
                    <Produk />
                </Route>

                <Route path="/cart">
                    <Navbar />
                    <Cart />
                </Route>

                <Route path="/profil">
                    <Navbar />
                    <Profil />
                </Route>

                <Route path="/register">
                    <Navbar />
                    <Register />
                </Route>

                <Route path="/login">
                    <Navbar />
                    <Login />
                </Route>

                <Route path="/order">
                    <Navbar />
                    <Order />
                </Route>

                <Route path="/checkout">
                    <Navbar />
                    <Checkout />
                </Route>



            </Switch>
        );
    }
}

export default Main;
