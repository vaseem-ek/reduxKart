import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk = createAsyncThunk('product/fetchProductThunk', async () => {
    const response = await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products',JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        loading: false,
        error: "",
        productPerPage:10,
        currentPage:1
    },
    reducers: {
        nextPage(state){
            state.currentPage++
        },
        prevPage(state){
            state.currentPage--
        },
        search(state,action){
            state.product=state.product.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.product=action.payload
            state.loading=false
        }),
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.product=[]
            state.loading=true
        }),
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.product=[]
            state.loading=false
            state.error="Api fetching failed !!"
        })
        
    }


})


export default productSlice.reducer
export const {nextPage,prevPage,search}=productSlice.actions