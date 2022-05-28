
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    questions: questionsReducer
}) 

export default rootReducer;

