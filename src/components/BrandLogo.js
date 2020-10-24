import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function BrandLogo(props) {
    const {id, img, brand} = props.productBrand;
    return (
        <Link to={"/"+brand.toLowerCase()}>
            <BrandLogoWrapper className="flex-fill">
                <div className="logo-img p-2">
                    <img src={img} alt="brand-logo" className="brand p-2"/>
                </div>
            </BrandLogoWrapper>
        </Link>
    )
}

const BrandLogoWrapper = styled.div`
    .brand{
        position: inherit;
        padding: 0px !important;
        
        width: 95px !important;
    }
    
    .flex-fill{
        width: 114px !important;
    }

    .logo-img{
        background: white;
    }
`
