const initialValue = ""

const ResultReducer  = (state=initialValue, action) =>{
    switch(action.type){

        case "GET_RESULT":
        return action.payload


        case "SET_RESULT":
        return action.payload
        default:
        return state
    }
}

export default ResultReducer