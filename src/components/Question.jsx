import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getQuestionsApi } from '../Redux/actions'
import { useNavigate } from "react-router-dom";
import { setResult, showResult } from '../Redux/actions';


const Question = ({getQuestionsApi, user, questions, setResult, showResult, result, show}) => {

  //states to be used within the component
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers]  =useState(1);

  const navigate = useNavigate()


  //get all questions if the user is authenticated
  //extra layer for authentication
  useEffect(()=>{
    if(user.id){
      getQuestionsApi()
    }
  },[])

  //this useEffect is used to navigate to the result route
  useEffect(()=>{
   if(result){
     showResult(true)
     navigate("/results")
   }
  },[result, navigate, showResult])


  const handleAnswering = (isCorrect)=>{
    // isCorrect is used to check the right answer;
    console.log(isCorrect);
    if(isCorrect){
      setCorrectAnswers(correctAnswers+1)
      
    }
    
    if(currentQuestion +1 < questions.length){
      setCurrentQuestion(currentQuestion + 1)
    }
    if(currentQuestion +1 === questions.length){
      setCurrentQuestion(currentQuestion);
      const result  = Math.round((correctAnswers/questions.length) * 100);
     
      setResult(result)
    
    }
    console.log(correctAnswers);
    
    
  }

  return (
     <>
     {questions? 
     (
     <>
     {/* display the question text */}
     <p>{questions[currentQuestion].text}</p>
     
     {/* display the options of each question */}
    <ul>
      {questions[currentQuestion].options.map(option => {
        return <li 
                key={option.id} 
                onClick={()=> handleAnswering(option.isCorrect)}
                style={{margin: "10px 3px"}}  >
                  {option.text}
              </li>;
      })
      }
    </ul>
     </>
     )
    :
    ""}
     </>
  )
  }







function mapStateToProps({user, questions, result}){

  return{
   questions: questions.length? questions : null,
   user: user.id? user: null,
   show: result.show,
   result: result.result
  }
}

export default connect(mapStateToProps, {getQuestionsApi, setResult, showResult})(Question)

