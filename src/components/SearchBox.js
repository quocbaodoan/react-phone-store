import React, { Component, useRef  } from 'react'
import styled from "styled-components"
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

export default class SearchBox extends Component{
    constructor(){
        super();
        this.state = {
            searchValue: "",
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };
    render(){
        return (
            <SearchWrapper>
                <ProductConsumer>
                    {value => {
                        return (
                            <React.Fragment>
                                <div className="form-inline ml-1">
                                    <div className="dropdown">
                                        <input type="text" className="form-control" name="searchValue" placeholder="Nhập từ khóa cần tìm" value={this.state.searchValue} onChange={this.handleChange} onClick={() => value.setDisplay()}/>
                                        <div className="autoContainer dropdown-search">
                                            {value.display && 
                                            value.products.filter( item => item.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1).slice(0, 5).map((item, i) => {
                                                return(
                                                    <div onClick={() => {value.handleDetail(item.id); value.removeDisplay()}} className="dropdown-item" key={i} tabIndex="0" >
                                                        <Link to="/details" key={i}>
                                                            <div className="row">
                                                                <div>
                                                                    <img src={item.img} style={{width:"40px"}}/>
                                                                </div>
                                                                <div>
                                                                    <span className="ml-2">{item.title}</span>
                                                                    <div className="ml-2" style={{fontSize:"14px"}}>{item.price}đ</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <Link to={"/"+this.state.searchValue.toLowerCase()}>
                                        <i className="fas fa-search ml-2" onClick={() => {value.setSearchValue(this.state.searchValue); value.removeDisplay()}}></i>
                                    </Link>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </ProductConsumer>
            </SearchWrapper>
        )
    }   
}

const SearchWrapper = styled.div`
    .form-control{
        width: 300px;
        border-radius: 20px !important;
    }

    .fa-search{
        color: white;
        font-size: 120%;
    }

    .dropdown-search{
        width: 300px;
        color: black;
        background-color: white;
        position: absolute;
        z-index: 1;
    }

    .dropdown-item{
        padding: 6px 30px !important;
    }

    a{
        color: #056676 !important;
        text-decoration: none;
    }

    a:active{
        color: #fcfcfc !important;
    }

    .fa-search:hover{
        color: #056676; 
    }

    .dropdown-item:active{
        background-color: #5eaaa8;
    }

    @media screen and (max-width: 768px) {
        .form-control {
            width: auto; /* The width is 100%, when the viewport is 800px or smaller */
        }

        .dropdown-search{
            width: auto;
        }
    }
`