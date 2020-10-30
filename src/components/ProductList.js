import React, { Component, useState } from 'react'
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "../context";
import Pagination from "./Pagination";
import BrandLogo from "./BrandLogo";

export default function ProductList(props) {
    let brand = props.brand;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <React.Fragment>
        <div className="pt-3">
            <div className="container">
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            return [
                                (
                                    <div className="text-center d-block container">
                                        <div className="row" style={{margin: "0px"}}>
                                            {value.productBrands.map(productBrand => {
                                            return(
                                                <BrandLogo key={productBrand.id} productBrand={productBrand}/>
                                            )
                                            })}
                                        </div>
                                    </div>
                                ),
                                (brand !== undefined) ? 
                                value.products.filter(product => product.title.toLowerCase().indexOf(brand) > -1).slice(indexOfFirstPost, indexOfLastPost).map(product => {
                                    return(
                                        <Product key={product.id} product={product}/>
                                    )
                                }) 
                                : 
                                value.products.slice(indexOfFirstPost, indexOfLastPost).map(product => {
                                    return(
                                        <Product key={product.id} product={product}/>
                                    )
                                }),
                                ((brand !== undefined) ? 
                                    value.products.filter(product => product.title.toLowerCase().indexOf(brand) > -1).length
                                    : 
                                    value.products.length) > 8 ?
                                <Pagination
                                    postsPerPage={8} 
                                    totalPosts={(brand !== undefined) ? 
                                        value.products.filter(product => product.title.toLowerCase().indexOf(brand) > -1).length
                                        : 
                                        value.products.length
                                    } 
                                    paginate={paginate}
                                />
                                : null
                            ]
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
