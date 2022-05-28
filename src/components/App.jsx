import React, {useEffect} from "react";
import { Route, Routes, Navigate} from "react-router-dom"
import Question from "./Question";
import Results from "./Results"
import Login from "./Login"
import Toast from "./ToastContainer"
import { connect } from "react-redux";
import {getQuestionsApi} from "../Redux/actions"



function App({user, getQuestionsApi}) {
  
  return (
  <>
      {/* ######################### */}
      {/* here is the toast container for react toastify */}
      <Toast
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme='dark'
      draggable
      pauseOnHover>
    </Toast>
  {/* ######################   */}
  {/* React Routes */}
  <Routes>
    <Route path="/" exact element={user.id? <Question/> : <Navigate to="/login"/>} />
    <Route path="/login" element={user.length? <Navigate to="/"/>:<Login/>}/>
    <Route path="/results" element={<Results/>}/>
  </Routes>
  
  </>  
  );
}

const mapStateToProps =({user}) =>{
  return{
    user: user.id? user: "",
  }
}

export default connect(mapStateToProps, {getQuestionsApi})(App);
