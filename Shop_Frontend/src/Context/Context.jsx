import React, { createContext, useContext, useState } from 'react';

// Create context

const CartContext = createContext();

// Create a custom hook

export const useCart = () => useContext(CartContext);

// Create the provider component

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
