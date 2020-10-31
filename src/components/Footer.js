import React, { Component } from 'react'
import styled from "styled-components"

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-6  offset-lg-2">
                            <h5 className="pt-4">Contact</h5>
                            <p className="pt-1">Email: quocbaodoan1999@gmail.com</p>
                            <p style={{paddingBottom: "27px"}}>Phone: 0914116540</p>
                        </div>
                        <div className="col-lg-5 col-6 pl-md-4 offset-lg-1">
                            <h5 className="pt-4">Social Network</h5>
                            <i className="fab fa-github pt-2"><a  href="https://github.com/quocbaodoan" target="blank" className="pl-1">https://github.com/quocbaodoan</a></i><br/>
                            <i className="fab fa-facebook pt-1"><a  href="https://www.facebook.com/quocbao.doan.127/" target="blank" className="pl-1">https://www.facebook.com/quocbao.doan.127</a></i>
                        </div>
                    </div>
                </div>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
    background-color: #5eaaa8;
    color: #fcfcfc;
    font-size: 16px;
    font-weight: 300;
    p{
        margin-bottom: 2px !important;
    }

    a{
        color: #fcfcfc !important;
        text-decoration: none !important;
        font-family: 'Oswald', sans-serif !important;
        font-weight: 300 !important;
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
    }

    @media screen and (max-width: 512px){
        font-size: 12px;
    }
`