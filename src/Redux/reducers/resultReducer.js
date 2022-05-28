const initialValue = {
    result: "",
    show: false,
    reset: false,
}

const ResultReducer  = (state=initialValue, action) =>{
    switch(action.type){

        case "GET_RESULT":
        return {
            ...state,
            result: action.payload,
            reset: false
        }

        case "SET_RESULT":
        return {
           ...state,
           result: action.payload,
           reset: false 
        }

        case "SHOW_RESULT":
        return {
          ...state,
          show: action.payload,
          
        }

        case "EMPTY_RESULT":
        return {
            result: "",
            show: false,
            reset: true
        }
        default:
        return state
    }
}

export default ResultReducer