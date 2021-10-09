import * as pizzaSelectors from './selectors'
import {asyncActions as pizzasAsyncActions, slice as pizzasSlice} from './pizzas-reducer';
import {PizzaBlock} from './PizzaBlock'

export {
    pizzaSelectors
}

const pizzasActions = {
    ...pizzasAsyncActions,
    ...pizzasSlice.actions
}

const pizzasReducer = pizzasSlice.reducer

export {
    pizzasActions,
    pizzasReducer,
    PizzaBlock
}
