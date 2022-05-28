
export const getResult = (result)=>{
    return {
        type: "GET_RESULT",
        payload: result
    }
}

export const setResult = (result) => dispatch =>{
   dispatch(getResult())
}

