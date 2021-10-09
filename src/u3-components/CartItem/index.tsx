import * as cartSelectors from './selectors'
import {asyncActions as cartAsyncActions, slice as cartSlice} from './cart-reducer'
import {CartItem} from './CartItem'

export {
    cartSelectors
}

const cartActions = {
    ...cartAsyncActions,
    ...cartSlice.actions
}

const cartReducer = cartSlice.reducer

export {
    cartActions,
    cartReducer,
    CartItem
}


