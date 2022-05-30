import React from 'react'
import { connect } from 'react-redux'
import { resetResult } from '../Redux/actions';



const Results = ({result, resetResult}) => {
  

  return (
    <div>
      
      <div className="row p-0 justify-content-center align-items-center">
          <div class="card text-center col-11 p-0">
              <div class="card-header">
                {/* display the question text */}
                <h2>Your final result is {Math.round(parseInt(result))}% out of 100%</h2>

              </div>
            <div class="card-body">
                <button className='btn btn-warning my-5' onClick={()=> {
                  resetResult()
                    }}>reset quiz
                </button>
             </div>
          </div>
        </div> 
     
    </div>
  )
}

function mapStateToProps({result}){
  console.log(result);
  return{
   result: result.result,
  }
}

export default connect(mapStateToProps, { resetResult})(Results)