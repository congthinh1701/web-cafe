import { combineReducers } from "redux";
import detailReducer from "./detail";
import userReducer from "./user";


const rootReducer=combineReducers({
    detail:detailReducer,
    user:userReducer,
})

export default rootReducer