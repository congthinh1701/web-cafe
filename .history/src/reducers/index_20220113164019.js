import { combineReducers } from "redux";
import checkLoginReducer from "./checkLoginReducer";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detail:detailReducer,
    checkLogin:checkLoginReducer,
})

export default rootReducer