import React from 'react'
import styled from "styled-components"

export default function CartColumns() {
    return (
        <CartColumnsWrapper>
            <div className="container text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase py-auto">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        </CartColumnsWrapper>
    )
}

const CartColumnsWrapper = styled.div`
    .container{
        background: white;
        height: 40px;
        border-radius: 20px;
    }
    p{
        margin-top: 8px !important;
    }
`