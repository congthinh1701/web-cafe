import { combineReducers } from "redux";
import cartReducer from "./cart";
import detailReducer from "./detail";
import userReducer from "./user";


const rootReducer=combineReducers({
    detail:detailReducer,
    user:userReducer,
    cart:cartReducer,
    form:form
})

export default rootReducer