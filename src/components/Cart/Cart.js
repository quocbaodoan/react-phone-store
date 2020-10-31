import React, { Component } from 'react';
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from "./CartTotals";
import {Link} from "react-router-dom"

export default class Cart extends Component {
    render() {
        return (
            <section>
                <div className="container my-2" style={{minHeight: "100vh"}}>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return(
                                <React.Fragment>
                                    <div>       
                                        <h1 className="text-center my-4" style={{color: "#056676", fontWeight: "1000", letterSpacing: "7px"}}>GIỎ HÀNG</h1>
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-xl-9">
                                                <CartColumns/>
                                                <CartList value={value}/>         
                                                <div className="mt-2 text-left">
                                                    <Link to="/">
                                                        <button className="btn btn-outline-danger text-uppercase mb-3 px-4" style={{borderRadius: "20px"}} type="button" onClick={() => value.clearCart()}>
                                                            Xóa giỏ hàng
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <CartTotals value={value} history = {this.props.history}/>
                                            </div>
                                        </div>
                                        </div>
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
