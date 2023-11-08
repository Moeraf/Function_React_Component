import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstCmp from './TrComponent/FirstComponent';
import FirstCmp01 from './TrComponent/UseProps';
import FirstCmp02 from './TrComponent/ReplacmentProps';
import FirstCmp03 from './TrComponent/ReplacmentFunction';
import FirstCmp04 from './TrComponent/UseState';
import HowToUseEffect from './TrComponent/UseEffect';
import UseLoacalStorage from './TrComponent/UseLocalStorage';
import HowToCallApi from './TrComponent/CallApi';
import UseAxios from './TrComponent/UseAxios';
import UseAxiosJoin from './TrComponent/UseAxiosJoinMultiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FirstCmp />
    <FirstCmp01 />
    <FirstCmp02 />
    <FirstCmp03 />
    <FirstCmp04 />
    <HowToUseEffect />
    <UseLoacalStorage />
    <HowToCallApi />
    <UseAxios />
    <UseAxiosJoin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
