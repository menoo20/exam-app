
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";
import ResultReducer from "./resultReducer"

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    questions: questionsReducer,
    result: ResultReducer
}) 

export default rootReducer;

