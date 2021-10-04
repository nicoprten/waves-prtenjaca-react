import * as React from 'react';

const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [productsCart, setProductsCart] = React.useState([]);

    const isInCart = (id) => {
        return productsCart.find((item)=>{
            if(item.id !== id){
                return false
            }
            else{
                return item.id
            }
        })
    }

    const addItem = (product, cantidad) => {
        const newItem = {...product, cantidad};
        if(isInCart(product.id)){
            
            let index = productsCart.findIndex((index) => index.id === product.id)
            const oldQt = productsCart[index].cantidad;
            newItem.cantidad += oldQt;
            productsCart.splice(index, 1);
            setProductsCart((prevState)=>[...prevState, newItem])
        }else{
            setProductsCart((prevState)=>[...prevState, newItem]);
        }        
    }

    const clear = () =>{
        setProductsCart([]);
    }

    const removeItem = (id) =>{
        const productosNoEliminados = productsCart.filter(producto => producto.id !== id);
        setProductsCart(productosNoEliminados);
    }

    return <CartContext.Provider value={{productsCart, setProductsCart, addItem, clear, removeItem}}>{children}</CartContext.Provider>;
}



export default CartContext;