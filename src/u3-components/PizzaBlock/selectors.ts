import {AppRootStateType} from '../../utils/types';

export const pizzasItemsSelectors =(state: AppRootStateType) => state.pizzas.items
export const pizzaIsLoadingSelectors =(state: AppRootStateType) => state.pizzas.isLoading
