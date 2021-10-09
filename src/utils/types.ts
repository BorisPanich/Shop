import { rootReducer, store } from "../u6-store/store";

export type RootReducerType = typeof rootReducer

export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch