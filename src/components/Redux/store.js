import {createStore} from "redux"
import {BalanceReducer} from "./Reducers/BalanceReducer"
export const store=createStore(BalanceReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
