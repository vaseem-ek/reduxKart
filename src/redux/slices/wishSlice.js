import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addWishlist(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert('product is already added')
            }else{
                state.wishlist.push(action.payload)
                alert('product addedd')
            }
        },
        removefromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!==action.payload)
            alert('product removed')
        }
    }
})

export default wishlistSlice.reducer
export const {addWishlist,removefromWishlist}=wishlistSlice.actions
