import { combineReducers } from "redux";
import cartReducer from "./cart";
import detailReducer from "./detail";
import formReducer from "./form";
import userReducer from "./user";


const rootReducer=combineReducers({
    detail:detailReducer,
    user:userReducer,
    cart:cartReducer,
    form:formReducer
})

export default rootReducer