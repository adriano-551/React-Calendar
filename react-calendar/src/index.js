import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Calendar from './Calendar';
import reportWebVitals from './reportWebVitals';

require('bootstrap');

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>

const currentDate = new Date(Date.now());
{ /*Debug logging*/ console.log(currentDate) }

ReactDOM.render(
  <React.StrictMode>
	<Calendar 
	  currentDate={currentDate}
	/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
