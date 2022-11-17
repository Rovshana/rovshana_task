import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") ) : [],
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
      //adding to also increasing the count
      addToCart: (state, action)=>{
const choossenItemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)

if(choossenItemIndex >= 0){
    state.cartItems[choossenItemIndex].cartQuantity += 1;
   } else{
    const product = {...action.payload, cartQuantity: 1}
    state.cartItems.push(product)
   } 
   localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      },
      // decereasing count
      decreaseQuantity( state, action){
        const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
        if(state.cartItems[itemIndex].cartQuantity > 1 ){
  state.cartItems[itemIndex].cartQuantity -= 1;
        } else if(state.cartItems[itemIndex].cartQuantity === 1){
          const filteredCartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
          state.cartItems = filteredCartItems
        
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  
      },
      removeItem: (state, action)=>{
        const otheritems = state.cartItems.filter(item => item.id !== action.payload.id)
        state.cartItems = otheritems
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

      },
      getTotal(state,action){
        let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
          const {cartQuantity, price} = cartItem;
          const itemTotal = cartQuantity * price;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal
        }, {total: 0,
        quantity: 0});
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setData, addToCart, decreaseQuantity, removeItem, getTotal} = ProductSlice.actions
  
  export default ProductSlice.reducer