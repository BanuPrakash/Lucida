import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../../model/CartItem";

export interface CartState {
    cartItems: CartItem[],
    quantity: number,
    total: number
}

const initialState: CartState = {
    cartItems: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // immerjs passes a reference of state clone
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cartItems.push({ ...action.payload });
            state.quantity++;
            state.total += action.payload.amount
        },
        increment: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item?.quantity) {
                item.quantity++;
                item.amount = item.price * item.quantity;
                state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

// {type: '', payload:''}
export const cartReducer = cartSlice.reducer;
export const { addToCart, increment, clearCart } = cartSlice.actions;