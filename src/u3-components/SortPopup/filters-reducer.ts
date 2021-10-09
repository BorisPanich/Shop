import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type SortByType = 'rating' | 'price' | 'name'
type Category = number | null

const initialState = {
   category: 0 as Category ,
   sortBy: 'rating' as SortByType
}

export type FiltersInitialState = typeof initialState

export const slice = createSlice({
   name: 'filters',
   initialState: initialState,
   reducers: {
      setSortBy(state, action: PayloadAction<{name: SortByType}>) {
         state.sortBy = action.payload.name
      },
      setCategory(state, action: PayloadAction<{ catIndex: number | null}>) {
         state.category = action.payload.catIndex
      },
   }
})

export const filtersReducer = slice.reducer
export const {setSortBy, setCategory} = slice.actions
