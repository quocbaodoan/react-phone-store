import React, { Component } from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from "./CartTotals";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <div className="container my-2">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return(
                                <React.Fragment>
                                    <div>       
                                        <h1 className="text-center my-3" style={{color: "#056676", fontWeight: "1000", letterSpacing: "7px"}}>GIỎ HÀNG</h1>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        <CartTotals value={value} history = {this.props.history}/>
                                    </div>  
                                </React.Fragment>   
                            );
                        }
                        else {
                            return(
                                <React.Fragment>
                                    <EmptyCart/>
                                </React.Fragment>
                            )
                        }
                    }}
                </ProductConsumer>
                </div>
            </section>
        )
    }
}
