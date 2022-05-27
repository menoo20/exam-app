import React from 'react'
import getShuffledQuestions from "../APIs/questions"

const Question = () => {
  return (
    <div>
       {
        getShuffledQuestions.map(question=>{
          return <h1 key={question.text}>{question.text}</h1>
        })
      }
    </div>
  )
}

export default Question