
import { createContext, useReducer } from "react";
import CartItem from "../model/CartItem";
import cartReducer from "../reducers/cartReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type ContextType = {
    products: CartItem[],
    total: number,
    quantity: number,
    addToCart: (cartItem: CartItem) => void,
    increment: (id: number) => void,
    checkout: () => void
}
type AppProps = {
    children: React.ReactNode
}
let CartContext = createContext<ContextType>({
    products: [],
    total: 0,
    quantity: 0,
    addToCart: (cartItem: CartItem) => { },
    increment: (id: number) => { },
    checkout: () => { }
});

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}
export default function CartProvider({ children }: AppProps) {
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(cartItem: CartItem) {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    }

    function increment(id: number) {
        dispatch({ type: 'INCREMENT', payload: id });
    }

    function checkout() {
        let order = {
            customer: sessionStorage.getItem("customer"),
            orderDate: new Date(),
            items: state.cartItems,
            total: state.total
        }
        axios.post('http://localhost:1234/orders', order).then(response => {
            dispatch({ type: 'CLEAR_CART' });
            navigate('/');
        })

        // navigate back to home page
    }
    return <CartContext.Provider value={{
        products: state.cartItems,
        total: state.total,
        quantity: state.quantity,
        addToCart,
        increment,
        checkout
    }}>
        {children}
    </CartContext.Provider>
}

export {
    CartContext
}