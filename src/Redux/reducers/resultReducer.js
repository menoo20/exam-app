const initialValue = {
    result: "",
    show: false,
}

const ResultReducer  = (state=initialValue, action) =>{
    switch(action.type){

        case "GET_RESULT":
        return {
            ...state,
            result: action.payload,
            
        }

        case "SET_RESULT":
        return {
           ...state,
           result: action.payload 
        }

        case "SHOW_RESULT":
        return {
          ...state,
          show: action.payload
        }
        default:
        return state
    }
}

export default ResultReducer