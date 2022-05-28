import React from 'react'
import { connect } from 'react-redux'
import { getResult } from '../Redux/actions'

const Results = ({result}) => {
  return (
    <div>
      <h1>Your final result is {Math.round(parseInt(result))}% out of 100%</h1>
    </div>
  )
}

function mapStateToProps({result}){
  console.log(result);
  return{
   result: result.result,
  }
}

export default connect(mapStateToProps, {getResult})(Results)