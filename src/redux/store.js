import { configureStore } from '@reduxjs/toolkit'

import cartItemsReducer from './cart/cartItemsSlide'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer
    },
})
