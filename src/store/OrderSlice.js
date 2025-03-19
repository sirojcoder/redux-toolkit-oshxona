import {createSlice} from '@reduxjs/toolkit'


 const initialState = {
    value : []
 }

 const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: { 
        setOrder: (state, action) => {
            console.log("Kelayotgan buyurtma:", action.payload); // Yangi buyurtmani logga chiqaramiz
            
            if (state.value.length === 0) {
                console.log("Buyurtmalar ro‘yxati bo‘sh, yangi mijoz qo‘shilmoqda...");
                state.value.push(action.payload);
            } else {
                let finded = state.value.find(item => item.client === action.payload.client);
                console.log("Topilgan mijoz:", finded); // Mijozni logga chiqaramiz

                if (finded) {
                    console.log("Mijoz topildi, orders yangilanmoqda...");
                    finded.orders = action.payload.orders;
                } else {
                    console.log("Mijoz topilmadi, yangi mijoz qo‘shilmoqda...");
                    state.value.push(action.payload);
                }
            }
            console.log("Yangilangan state:", state.value); // Oxirgi holatni ko‘rish uchun
        },
        removeClient: (state, action) => {
            state.value = state.value.filter(item => item.client !== action.payload);
          },
          
    }
});



export const {setOrder,removeClient} = OrderSlice.actions

export default OrderSlice.reducer