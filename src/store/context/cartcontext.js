import { createContext,useContext,useState } from "react";
const cartContext=createContext();

export const CartProvider=({children})=>{
    const[cartItems,setcartItems]=useState([]);
    const addCart=(item)=>{
        setcartItems([...cartItems,item])
    }
    const removeCart=(item)=>{
        setcartItems(cartItems.filter((mango)=>mango!==item))
    }
    return(
        <cartContext.Provider value={{cartItems,addCart,removeCart}}>
            {children}
        </cartContext.Provider>
    )
}
export const useCart=()=>{
    return useContext(cartContext)
}