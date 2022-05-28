
const initialValue = {};


const questionsReducer = (state = initialValue, action)=>{

    switch(action.type){
       
        case "GET_QUESTIONS":
        return action.payload
        
        default: 
        return state
    }

}

export default questionsReducer