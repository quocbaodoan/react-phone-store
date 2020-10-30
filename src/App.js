import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import {ProtectedRoute} from "./ProtectedRoute";
import {ProductConsumer} from "./context";

class App extends Component{
    render(){
        return (
            <React.Fragment>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={ProductList}></Route>
                        <Route path="/details" component={Details}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/#" component={Default}></Route>
                        <ProductConsumer>
                            {value => {
                                return (
                                <Route path={"/" + value.searchValue.toLowerCase()}>
                                    <ProductList brand={value.searchValue.toLowerCase()} ></ProductList>
                                </Route>)
                            }}
                        </ProductConsumer>
                    </Switch>
                    <Modal/>
            </React.Fragment>
        );
    }
}

export default App;
