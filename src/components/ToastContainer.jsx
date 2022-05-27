import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(){
  return (
    <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    theme='dark'
    draggable
    pauseOnHover>
    </ToastContainer>
  );
}

export default Toast;