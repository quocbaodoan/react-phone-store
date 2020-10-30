import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-uppercase">
                    <h1 style={{color: "#056676", fontWeight: "1000", letterSpacing: "6px"}}>Giỏ hàng hiện đang trống</h1>
                </div>
            </div>
        </div>
    )
}
