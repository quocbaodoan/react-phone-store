import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-8 col-md-6 col-lg-3 my-3 align-self-start mx-auto mx-md-0">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <React.Fragment>
                                <div className="img-container px-5 py-5" onClick = {() => value.handleDetail(id)}>
                                    <Link to="/details">
                                        <img src={img} alt="product" className="card-img-top"/>
                                    </Link>
                                    <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id);}}>
                                        {inCart ? (<p className="mb-0" disabled>Đã có</p>) : (<p className="mb-0" disabled>Thêm vào giỏ</p>)}
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <h5>{title}</h5>
                                    <h6 className="mt-0 mb-0">
                                        <span className="justify-content-end">{price}đ</span>
                                    </h6>
                                </div>
                            </React.Fragment>
                        )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        border-radius: 20px;
        transition: all 0.3s linear;
    }

    .card-footer{
        background: transparent;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top: transparent;
        transition: all 0.3s linear;
        color: #056676;
    }

    &:hover{
        .card{
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2)
        }
        .card-footer{
            background: #5eaaa8;
            color: #fcfcfc;
        }
    }
    
    .img-container{
        position: relative;
        overflow: hidden;
    }

    .card-img-top{
        transition: transform 0.3s linear;
    }

    .img-container:hover .card-img-top{
        transform: scale(1.04);
    }

    .cart-btn{
        width: 100px;
        position: absolute;
        bottom: 2%;
        left: 32%;
        padding: 4px 0.4rem;
        background: #5eaaa8;
        border:none;
        color: #fcfcfc;
        border-radius: 20px;
        transform: translate(0, 125%);
        font-size: 17px;
        transition: transform 0.3s linear;
    }

    .img-container:hover .cart-btn{
        transform: translate(0, 0);
    }

    .cart-btn:hover{
        color: var(--mainBlack);
        cursor: pointer;
    }
`;