import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import RemoveDisplaySearchBox from './RemoveDisplaySearchBox';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
                <div className="navbar navbar-expand-sm navbar-dark px-sm-5 container">
                    {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand"/>
                    </Link>
                    <RemoveDisplaySearchBox>
                        <SearchBox/>
                    </RemoveDisplaySearchBox>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span>
                                <i className="fas fa-cart-plus"/>
                            </span>
                            <span className="d-none d-sm-inline ml-2">
                            Giỏ hàng
                            </span>
                        </ButtonContainer>
                    </Link> 
                </div>
            </NavWrapper>
        );
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.15rem solid #056676;
    color: #056676;
    border-radius: 20px;
    padding: 1px 0.7rem 3px 0.7rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;

    &:hover{
        background: #056676;
        color: #fcfcfc;
    }

    &:focus{
        outline: none;
    }
`

const NavWrapper = styled.nav`
    background: #a3d2ca;
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.6rem;
        text-transform: capitalize !important;
    }

    .navbar-brand{
        color: white !important;
        width: 70px;
        padding: 0px;
    }

    .navbar{
        padding: 0px
    }
`
