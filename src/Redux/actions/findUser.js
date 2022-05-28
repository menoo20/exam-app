
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
export const checkUserApi = (data) => async dispatch => {
    
    //findUser is a comparative method that return the user if true and returns error if false
    const result =  findUser(data.email, data.password);

    //react-toastify is used here to return a success toast in case the user was found
    const success = () => toast.success("Great! are you ready for the exam")
	
    //toastify function to dismiss the the current active toast
    const dismiss = () =>  toast.dismiss(toast.current);
    const userSchema = {user: result.user, error: result.error}
    console.log(userSchema)
    if(userSchema.user!==undefined){
       await dispatch(removeError());
        //  timeout is variable that controls the setTimeout
        let timeout;
        timeout = setTimeout(success, 1000);
        await dispatch(checkUser(result.user))
        setTimeout(dismiss, 4500)
        return;
    }
    
    else if(userSchema.user === undefined){
        await dispatch(addError(userSchema.error))
        return;
    }
}

