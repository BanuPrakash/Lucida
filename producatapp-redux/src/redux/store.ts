import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/CartSlice";
import { userReducer } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// instead of createStore
const store = configureStore({
    // same as combineReducer
    reducer: {
        cart: cartReducer,
        profile: userReducer
    },
    devTools: true // default is true compose(window.__REDUX_DEVTOOLS_EXTENSION())
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;


/*
    type CartType = {
        cartItems: CartItem[],
        quantity: number
        ...
    }
    type RootType = {
        cart: CartType,
        profile: ProfileType,
        products:ProductType
    }
    state = {
        cart: {
            cartItems: [],
            quantity: 0,
            total: 0
        },
        profile: {
            avatar: ''.
            name: ''
        }
    }

*/