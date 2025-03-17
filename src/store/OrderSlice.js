import {createSlice} from '@reduxjs/toolkit'

 const initialState = {
    value : []
 }

 const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: ()=>{

        }
    }
 })

export const {setOrder} = OrderSlice.actions

export default OrderSlice.reducer