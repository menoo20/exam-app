const initialValue = {};


const userReducer = (state = initialValue, action)=>{

    switch(action.type){
       
        case "CHECK_USER":
        return action.payload
        
        default: 
        return state
    }

}

export default userReducer