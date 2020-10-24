import React, { Component } from 'react';
import {storeProducts, detailProduct, productBrands} from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        productBrands: productBrands,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        display: false,
        searchValue: "",
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return{
                detailProduct: product
            }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = parseInt(product.price.split('.').join(""));
        product.total = price * product.count;
        this.setState(() => {
            return{
                products: tempProducts, 
                cart:[...this.state.cart, product],
            }}, 
            () => {
                this.addTotals();
            }
        )
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return{
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return{
                modalOpen: false
            }
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count++;
        const price = parseInt(product.price.split('.').join(""));
        product.total = product.count * price;
        this.setState(() => {
            return{
                cart: [...tempCart]
            }},
            () => {
                this.addTotals();
            }
        )
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count--;
        const price = parseInt(product.price.split('.').join(""));
        product.total = product.count * price;
        this.setState(() => {
            return{
                cart: [...tempCart]
            }},
            () => {
                this.addTotals();
            }
        )
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return{
                cart: [...tempCart],
                products: [...tempProducts]
            }},
            () => {
                this.addTotals();
            }
        )
    }
    
    clearCart = () => {
        this.setState(() => {
            return{
                cart: []
            }},
            () => {
                this.setProducts();
                this.addTotals();
            }
        )
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {subTotal += item.total});
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }

    handleChange = (value) => {
        this.setState(() => {
            return{
                searchValue: value
            }}
        )
    }

    setDisplay = () => {
        this.setState(() => {
            return{
                display: true
            }
        })
    }

    removeDisplay = () => {
        this.setState(() => {
            return{
                display: false
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleChange: this.handleChange,
                setDisplay: this.setDisplay,
                removeDisplay: this.removeDisplay
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};


/* getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return{
                detailProduct: product
            }
        })
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = parseInt(product.price.split('.').join(""));
        product.total = price;
        this.setState(() => {
            return{
                products: tempProducts, 
                cart:[...this.state.cart, product],
            };
        })
    }; */