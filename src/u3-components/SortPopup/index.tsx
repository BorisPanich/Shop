import * as filterSelectors from './selectors'
import {slice as filtersSlice} from './filters-reducer';
import {SortPopup} from './SortPopup'

export {
    filterSelectors
}

const filtersActions = {
    ...filtersSlice.actions
}

const pizzasReducer = filtersSlice.reducer

export {
    filtersActions,
    pizzasReducer,
    SortPopup
}

