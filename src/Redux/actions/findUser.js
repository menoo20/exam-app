
import { addError, removeError } from "./errorsAction"
import {findUser} from "../../APIs/userApi"
import { toast} from "react-toastify";
import React from "react";


//this action adds the user to the reducer if correctly fetched
const checkUser = (user)=>{
    return{
        type: "CHECK_USER",
        payload: user
    }
}



//this works like a simulative api response
export const checkUserApi = (data) => dispatch => {
    
    //findUser is a comparative method that return the user if true and returns error if false
    const result = findUser(data.email, data.password);

    //react-toastify is used here to return a success toast in case the user was found
    const success = () => toast.success("Great! are you ready for the exam")
	
    //toastify function to dismiss the the current active toast
    const dismiss = () =>  toast.dismiss(toast.current);


    if (result.user) {
        //dispatch remove for the error which will update the redux reducer and remove the 
        // error object
        dispatch(removeError());

        //timeout is variable that controls the setTimeout
        let timeout;
        timeout = setTimeout(success, 1000);
        dispatch(checkUser(result.user))
        setTimeout(dismiss, 4500)
        return result
    }
    else if(result.error) {
        //error toast
        const error= ()=> toast.error(`${result.error}`)
        let timeout;
        timeout = setTimeout(error, 1000)
        dispatch(addError(result.error))
        setTimeout(timeout, 3500)
    }
        return result
}

