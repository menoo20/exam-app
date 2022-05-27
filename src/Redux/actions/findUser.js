
import { addError, removeError } from "./errorsAction"
import {findUser} from "../../APIs/userApi"
import { toast} from "react-toastify";
import React from "react";
const checkUser = (user)=>{
    return{
        type: "CHECK_USER",
        payload: user
    }
}

export const checkUserApi = (data) => dispatch => {

    const result = findUser(data.email, data.password);
    const success = () => toast.success("Great! are you ready for the exam")
	
  
    const dismiss = () =>  toast.dismiss(toast.current);
    if (result.user) {
        // console.log(result.user)
        dispatch(removeError());
        // const successify = ()=>setTimeout(toast.success("Great! are you ready for the exam"), 2500)
        // successify()
        let timeout;
        timeout = setTimeout(success, 1000);
        dispatch(checkUser(result.user))
        setTimeout(dismiss, 4500)
        return result
    }
    else if(result.error) {
        const error= ()=> toast.error(`${result.error}`)
        let timeout;
        timeout = setTimeout(error, 1000)
        dispatch(addError(result.error))
        setTimeout(timeout, 3500)
    }
        return result
}

