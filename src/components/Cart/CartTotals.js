import React from 'react';
import {Link} from "react-router-dom";
import PaypalButton from "./PaypalButton";

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 mt-2 ml-sm-5 ml-md-auto text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal: 
                        </span>
                        <strong>{convertToString(cartSubTotal)}đ</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax: 
                        </span>
                        <strong>{convertToString(cartTax)}đ</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total: 
                        </span>
                        <strong>{convertToString(cartTotal)}đ</strong>
                    </h5>
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>
            </div>
        </React.Fragment>
    )
}

function convertToString(value){
    let resString = value.toString();
    let resFinal = "";
    while(resString.length > 3){
        resFinal = "." + resString.substr(resString.length - 3, resString.length - 1) + resFinal;
        resString = resString.substr(0, resString.length - 3);
    }
    resFinal = resString + resFinal;
    return resFinal;
}
