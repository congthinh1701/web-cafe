import { combineReducers } from "redux";
import checkLoginReducer from "./user";
import detailReducer from "./detail";
import userReducer from "./user";


const rootReducer=combineReducers({
    detail:detailReducer,
    user:userReducer,
})

export default rootReducer