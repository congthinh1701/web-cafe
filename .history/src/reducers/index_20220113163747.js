import { combineReducers } from "redux";
import detailReducer from "./detail";


const rootReducer=combineReducers({
    detail:detailReducer,
    check
})

export default rootReducer