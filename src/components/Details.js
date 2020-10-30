import React, { Component } from 'react'
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import Title from "./Title";
import styled from "styled-components";

export default class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {(value) => {
                        const {id, company, price, title, info, img, inCart, specification} = value.detailProduct
                        return(
                            <ProductWrapper className="container">
                                {/*title*/}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted mt-5 mb-3">
                                        <h1 style={{color: "#056676", fontWeight: "600"}}>{title}</h1>
                                    </div>
                                </div>
                                {/*end title*/}
                                {/*product info*/}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-4 my-3 text-capitalize">
                                        <img src={img} className="img-fluid pl-4 py-4" alt="product"/>
                                    </div>
                                    {/*product text*/}
                                    <div className="col-10 mx-auto col-md-4 my-3">
                                        <h4 className="mt-3 mb-2" style={{color: "#056676"}}>
                                            <strong>
                                                Thương hiệu: <span>{company}</span>
                                            </strong>
                                        </h4>
                                        <h4 style={{color: "#056676"}}>
                                            <strong>
                                                Giá: {price}<span>đ</span>
                                            </strong>
                                        </h4>   
                                        <p style={{color: "#666666"}}>
                                            {info}
                                        </p>
                                        {/*button*/}
                                        <Link to="/">
                                            <ButtonContainer>
                                                Quay lại
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart 
                                            disabled={inCart ? true : false} 
                                            onClick={() => {value.addToCart(id); value.openModal(id);}}
                                        >
                                            {inCart ? "Đã có" : "Thêm vào giỏ"}
                                        </ButtonContainer>
                                    </div>
                                    <div className="col-10 mx-auto col-md-4 my-3 text-capitalize pr-4">    
                                        <h5 className="mt-3" style={{color: "#056676"}}>Thông số kỹ thuật</h5>
                                        <ul className="parameter">
                                            <li>
                                                <span className="main">Màn hình:</span>
                                                <span className="sub">{specification[0]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Hệ điều hành:</span>
                                                <span className="sub">{specification[1]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Camera sau:</span>
                                                <span className="sub">{specification[2]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Camera trước:</span>
                                                <span className="sub">{specification[3]}</span>
                                            </li>
                                            <li>
                                                <span className="main">CPU:</span>
                                                <span className="sub">{specification[4]}</span>
                                            </li>
                                            <li>
                                                <span className="main">RAM:</span>
                                                <span className="sub">{specification[5]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Bộ nhớ trong:</span>
                                                <span className="sub">{specification[6]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Thẻ sim:</span>
                                                <span className="sub">{specification[7]}</span>
                                            </li>
                                            <li>
                                                <span className="main">Dung lượng pin:</span>
                                                <span className="sub">{specification[8]}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </ProductWrapper>
                        )
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

const ProductWrapper = styled.div`
    height: 91vh;
    background: white;
    .img-fluid{
        background: white;
        border-radius: 20px;
    }
    
    .parameter{
        font-weight: 100;
        display: block;
        position: relative;
        overflow: hidden;
        padding-left: 0px !important;
    }

    li{
        display: table;
        width: 100%;
        border-top: 1px solid #eeeeee;
        padding: 8px 0px;
    }

    .main{
        display: table-cell;
        width: 35%;
        vertical-align: top;
        color: #666666;
    }

    .sub{
        display: table-cell;
        width: auto;
        color: #056676;
    }
`

const ButtonContainer = styled.button`
    font-size: 1.2rem;
    background: transparent;
    border: 0.15rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "#056676"};
    color: ${props => props.cart ? "var(--mainYellow)" : "#056676"};
    border-radius: 20px;
    padding: 0.1rem 0.7rem 0.3rem 0.7rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;

    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "#056676"};
        color: var(--mainDark);
    }

    &:focus{
        outline: none;
    }
`