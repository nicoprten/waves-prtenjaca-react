import * as React from 'react';

const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [productsCart, setProductsCart] = React.useState([]);
    const [precioTotal, setPrecioTotal] = React.useState(0);
    const [user, setUser] = React.useState();

    const enviarPrecioTotal = () => {
        const precios = productsCart.map(product => product.precio * product.cantidad)
        const total = precios.reduce((prevPrice, currentPrice)=> prevPrice + currentPrice, 0);
        setPrecioTotal(total);
    }
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
            let index = productsCart.findIndex((index) => index.id === product.id);
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

    const enviarDatosUser = () =>{
        let user = {
            nombre : document.getElementById('nombre').value,
            mail : document.getElementById('mail').value,
            cel : document.getElementById('cel').value
        }
        setUser(user);
    }

    return <CartContext.Provider value={{productsCart, setProductsCart, addItem, clear, removeItem, enviarDatosUser, user, precioTotal, enviarPrecioTotal}}>{children}</CartContext.Provider>;
}



export default CartContext;