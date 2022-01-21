import { combineReducers } from "redux";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detail:detailReducer,
    checkLogin:checkLoginReducer,
})

export default rootReducer