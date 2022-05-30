import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux"
import store, {persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
    <App />
    </Router>
    </PersistGate> 
    </Provider>
  </React.StrictMode>
);


