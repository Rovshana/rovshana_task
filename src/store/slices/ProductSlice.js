import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setData: (state, action)=>{
        state.data.push(action.payload)
      },
      addToCart: (state, action)=>{
const choossenItemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)

if(choossenItemIndex >= 0){
    state.cartItems[choossenItemIndex].cartQuantity += 1;
   } else{
    const product = {...action.payload, cartQuantity: 1}
    state.cartItems.push(product)
   }
      },
      removeItem: (state, action)=>{
        const otheritems = state.cartItems.filter(item => item.id !== action.payload.id)
        state.cartItems = otheritems

      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setData, addToCart, removeItem } = ProductSlice.actions
  
  export default ProductSlice.reducer