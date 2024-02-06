import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart: (state, action) => {
            const { product } = action.payload;
            const itemPresent = state.cart.find((item) => item.id === product.id);
            if (itemPresent) {
              itemPresent.quantity++;
            } else {
              state.cart.push({ ...product, quantity: 1 });
            }
          },
          removeFromCart: (state, action) => {
            const removeItemId = action.payload;
            state.cart = state.cart.filter(item => item.id !== removeItemId);
        },
        
        incrementQuantity:(state , action)=>{
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            );
            itemPresent.quantity++;
        },
        decrementQuantity:(state , action)=>{
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if(itemPresent.quantity === 1){
                itemPresent.quantity =0;
                const removeItem = state.cart.filter(
                    (item)=>item.id !== action.payload.id
                );
                state.cart = removeItem--;
            }else{
                itemPresent.quantity--;
            }
        },
        clearCart:(state) => {
            state.cart = [];
        }
        
    },
});

export const {addToCart , removeFromCart , incrementQuantity , decrementQuantity , clearCart} = CartSlice.actions;
export default CartSlice.reducer