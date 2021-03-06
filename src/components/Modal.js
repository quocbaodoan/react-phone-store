import React, { Component } from 'react'
import styled from "styled-components";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-5 text-center p-5">
                                            <h3 style={{color: "#056676", fontWeight: "1000"}}>Sản phẩm đã được thêm vào giỏ</h3>
                                            <img src={img} className="img-fluid px-4 py-2 mt-2" alt="product"/>
                                            <h5 style={{color: "#056676"}} className="mt-3">{title}</h5>
                                            <h5 className="text-muted">Giá: {price}đ</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick = {() => closeModal()}>
                                                    Tiếp tục mua sắm
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick = {() => closeModal()}>
                                                    Đến giỏ hàng
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal{
        background: white;
        border-radius: 20px;
    }

    .img-fluid{
        border-radius: 20px;
        background: white;
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
        color: ${props => props.cart ? "#fcfcfc" : "#fcfcfc"} !important;
        color: var(--mainDark);
    }

    &:focus{
        outline: none;
    }
`