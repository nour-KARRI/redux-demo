import { combineReducers } from "redux";
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducers