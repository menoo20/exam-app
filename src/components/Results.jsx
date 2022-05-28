import React from 'react'
import { connect } from 'react-redux'
import { getResult, resetResult } from '../Redux/actions'
import { useNavigate } from 'react-router-dom'

const Results = ({result, resetResult}) => {
  const navigate = useNavigate()
  

  return (
    <div>
      <h1>Your final result is {Math.round(parseInt(result))}% out of 100%</h1>
      <button onClick={()=> {
        resetResult()
        // navigate("/")
        }}>reset</button>
    </div>
  )
}

function mapStateToProps({result}){
  console.log(result);
  return{
   result: result.result,
  }
}

export default connect(mapStateToProps, {getResult, resetResult})(Results)