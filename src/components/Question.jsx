import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getQuestionsApi } from '../Redux/actions'
import { useNavigate } from "react-router-dom";



const Question = ({getQuestionsApi, user, questions}) => {

  //states to be used and to be converted to redux
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers]  =useState(1); //will be redux
  const [result, setResult] = useState(1); //will be redux
  const [showResult, setShowResult] = useState(false)
  const navigate = useNavigate()


  //get all questions if the user is authenticated
  //extra layer for authentication
  useEffect(()=>{
    if(user.id){
      getQuestionsApi()
    }
  },[])

  // useEffect(()=>{
  //  if(showResult){
  //    navigate("/results")
  //  }
  // },[showResult])


  const handleAnswering = (isCorrect)=>{
    // console.log(isCorrect);
    if(isCorrect){
      setCorrectAnswers(correctAnswers+1)
      
    }
    if(currentQuestion +1 < questions.length){
      setCurrentQuestion(currentQuestion + 1)
    }
    else if(currentQuestion +1 === questions.length){
      setCurrentQuestion(currentQuestion);
      setShowResult(true)
    }
    console.log("currentQuestion Index: ", currentQuestion,
                "correct Answers: ", correctAnswers);
    
    setResult((correctAnswers/questions.length) * 100)
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
                value={option.isCorrect}
                onClick={()=> handleAnswering(option.isCorrect)} >
                  {option.text}
              </li>;
      })
      }
    </ul>
     </>
     )
    :
    ""}
    {showResult?
    <p>final result is {result}% of 100%</p>: ""
     }  
     </>
  )
  }







function mapStateToProps({user, questions}){

  return{
   questions: questions.length? questions : null,
   user: user.id? user: null
  }
}

export default connect(mapStateToProps, {getQuestionsApi})(Question)

