import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from "./store/configureStore";
import App from './App';
import "./index.css";

const app  = (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ToastContainer position="top-right"/>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(app);
