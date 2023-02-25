import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/Intro';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { TerminalContextProvider } from "react-terminal";

const rootEl =  document.getElementById('root')
if(!rootEl) {throw new Error("Must be an element");
}
const root = ReactDOM.createRoot(rootEl);
root.render(
    <TerminalContextProvider>
    <Router>
        <Intro />
    </Router>
    </TerminalContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
