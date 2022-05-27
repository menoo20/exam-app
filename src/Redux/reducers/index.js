
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer
}) 

export default rootReducer;

