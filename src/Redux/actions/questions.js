
import getShuffledQuestions from "../../APIs/questions"
import { toast} from "react-toastify";


//This action will add the fetched questions to the reducer
const getQuestions = (questions)=>{
    return{
        type: "GET_QUESTIONS",
        payload: questions
    }
}



//this works like a simulative api response
export const getQuestionsApi = _=> dispatch => {
    
        //get shuffled questions is a method used to return object that holds the questions values
        const questions = Object.values(getShuffledQuestions)
        
        // dispatch the action that will save the questions array in the reducer
        dispatch(getQuestions(questions))
         
}

