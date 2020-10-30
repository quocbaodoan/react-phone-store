import React from 'react';
import {Link} from "react-router-dom";
import PaypalButton from "./PaypalButton";
import styled from "styled-components";

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <CartTotalsWrapper>
        <React.Fragment>
            <div className="row">
                <div className="col-12 mt-2 ml-auto text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-4" style={{borderRadius: "20px"}} type="button" onClick={() => clearCart()}>
                            Xóa giỏ hàng
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg-3 col-md-5 col-sm-5 ml-auto text-right">
                    <ul className="parameter">
                        <li>
                            <span className="main">Tổng:</span>
                            <span className="sub">{convertToString(cartSubTotal)}đ</span>
                        </li>
                        <li>
                            <span className="main">Thuế:</span>
                            <span className="sub">{convertToString(cartTax)}đ</span>
                        </li>
                        <li>
                            <span className="main">Tổng thanh toán:</span>
                            <span className="sub">{convertToString(cartTotal)}đ</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ml-auto text-right">
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>
            </div>
        </React.Fragment>
        </CartTotalsWrapper>
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

const CartTotalsWrapper = styled.div`
    .parameter{
        font-weight: 500;
        display: block;
        position: relative;
        overflow: hidden;
        padding-left: 0px !important;
    }

    li{
        display: table;
        width: 100%;
        padding: 8px 0px;
    }

    .main{
        display: table-cell;
        width: 65%;
        vertical-align: top;
        color: #666666;
    }

    .sub{
        display: table-cell;
        width: auto;
        color: #056676;
    }
`
