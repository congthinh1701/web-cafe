import { combineReducers } from "redux";
import detailReducer from "./Detail";


const rootReducer=combineReducers({
    detail:detailReducer,
})

export de