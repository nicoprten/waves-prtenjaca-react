import * as React from 'react';

const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [productsCart, setProductsCart] = React.useState([]);

    const addItem = (product, cantidad) => {
        const productCart = {...product, cantidad};
        setProductsCart([...productsCart, productCart]);
        
    }
    console.log(productsCart)

    return <CartContext.Provider value={{productsCart, setProductsCart, addItem}}>{children}</CartContext.Provider>;
}

export default CartContext;