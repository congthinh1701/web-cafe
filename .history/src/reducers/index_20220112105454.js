import { combineReducers } from "redux";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detai:detailReducer,
})

export default rootReducer