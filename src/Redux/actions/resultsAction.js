
export const getResult = (result)=>{
    console.log("from the action: ", result)
    return {
        type: "GET_RESULT",
        payload: result
    }
}

export const showResult = (boolean) =>{
    return {
        type: "SHOW_RESULT",
        payload: boolean
    }
}

export const setResult = (result) => dispatch =>{
   dispatch(getResult(result))
}

