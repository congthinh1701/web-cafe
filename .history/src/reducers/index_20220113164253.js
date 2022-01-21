import { combineReducers } from "redux";
import checkLoginReducer from "./user";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detail:detailReducer,
    user:checkLoginReducer,
})

export default rootReducer