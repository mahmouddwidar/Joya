import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { baseURL } from "../../config/config";
import { authHeaders } from "../../config/axiosConfig";


let initialState = {
    loading: false,
    products: []
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', (url) => {
    let token = localStorage.getItem('userToken');
    return axios.get(
        `${baseURL}/api/${url}`,
        {},
        { headers: authHeaders})
        .then((res) => {
            return res.data;
        });
});


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state, action) => {
            state.products = action.payload;
        }
    },

    // for async fetchUser call
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;

        })
    }

});


export const { setProductsAction } = productsSlice.actions;
export const productsDataSelector = (state) => state.products.products;
export default productsSlice.reducer;
