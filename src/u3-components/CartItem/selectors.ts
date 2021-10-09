import {AppRootStateType} from '../../utils/types';

export const cartItemsSelectors =(state: AppRootStateType) => state.cart.items
export const totalPriceSelectors =(state: AppRootStateType) => state.cart.totalPrice
export const itemsCountSelectors =(state: AppRootStateType) => state.cart.itemsCount
