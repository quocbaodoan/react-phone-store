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
                        const {id, company, price, title, info, img, inCart} = value.detailProduct
                        return(
                            <ProductWrapper className="container py-5">
                                {/*title*/}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/*end title*/}
                                {/*product info*/}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={img} className="img-fluid px-4 py-4" alt="product"/>
                                    </div>
                                    {/*product text*/}
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <h2>Model: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Made by: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4>
                                            <strong>
                                                Price: {price}<span>đ</span>
                                            </strong>
                                        </h4>
                                        <p className="text-muted">
                                            {info}
                                        </p>
                                        {/*button*/}
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back to Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart 
                                            disabled={inCart ? true : false} 
                                            onClick={() => {value.addToCart(id); value.openModal(id);}}
                                        >
                                            {inCart ? "In Cart" : "Add to Cart"}
                                        </ButtonContainer>
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
    .img-fluid{
        background: white;
        border-radius: 20px;
    }
`

const ButtonContainer = styled.button`
    font-size: 1.4rem;
    background: transparent;
    border: 0.15rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 15px;
    padding: 0.1rem 0.7rem 0.3rem 0.7rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;

    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainDark);
    }

    &:focus{
        outline: none;
    }
`