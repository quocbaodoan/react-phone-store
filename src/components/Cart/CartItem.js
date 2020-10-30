import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function CartItem({item, value}) {
    const {id, img, title, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    let totalString = total.toString();
    let totalFinal = "";
    while(totalString.length > 3){
        totalFinal = "." + totalString.substr(totalString.length - 3, totalString.length - 1) + totalFinal;
        totalString = totalString.substr(0, totalString.length - 3);
    }
    totalFinal = totalString + totalFinal;
    
    return (
        <React.Fragment>
            <CartWrapper className="px-lg-0">
                <div className="row text-center">
                    <div className="col-10 mx-auto col-lg-2" onClick = {() => value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} style={{width:"5rem"}} className="img-fluid" alt="product"/>
                        </Link>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-auto" onClick = {() => value.handleDetail(id)}>
                        <span className="d-lg-none">Sản phẩm: </span>
                        <Link to="/details" style={{color: "#056676", textDecoration: "none"}}>
                            {title}
                        </Link>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-auto">
                        <span className="d-lg-none">Giá: </span>
                        {price}đ
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-lg-auto">
                        <div className="d-flex justify-content-center">
                            <div>
                                <input className="btn btn-decrement mx-1" onClick={() => decrement(id)} disabled={(count <= 1) ? true : false}/>
                            </div>
                            <div>
                                <span className="btn btn-number-cart mx-1" style={{color: "#056676"}}>{count}</span> 
                            </div>
                            <div>
                                <input className="btn btn-increment mx-1" onClick={() => increment(id)}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-auto">
                        <div className="cart-remove-icon" onClick={() => removeItem(id)}>
                            <i className="fas fa-trash"></i>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-auto">
                        {totalFinal}đ
                    </div>
                </div>
            </CartWrapper>
        </React.Fragment>
    )
}

const CartWrapper = styled.div`
    input{
        font-size: 0px !important;
    }

    .btn-decrement{
        padding: 0 !important;
        border-top: 10px solid transparent !important;
        border-right: 16px solid #666666 !important;
        border-bottom: 10px solid transparent !important;
    }

    .btn-number-cart{
        padding: 0px !important;
    }

    .btn-increment{
        padding: 0 !important;
        border-top: 10px solid transparent !important;
        border-left: 16px solid #666666 !important;
        border-bottom: 10px solid transparent !important;
    }

    .cart-remove-icon{
        cursor: pointer;
        font-size: 1.2rem;
        color: var(--mainYellow);
    }

    background: white;
    margin-top: 10px;
    padding: 10px 0px;
    border-radius: 20px;
    color: #056676 !important;
`