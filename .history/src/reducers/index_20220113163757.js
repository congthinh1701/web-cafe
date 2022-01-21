import { combineReducers } from "redux";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detail:detailReducer,
    checkLogin:che
})

export default rootReducer