import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

import Users from "./components/users";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Users/>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();


console.log(  );


Math.abs(42);     // 42
Math.abs(-42);    // 42
Math.abs(null);   // 0
Math.abs('');     // 0
Math.abs([]);     // 0
Math.abs([42]);   // 42
Math.abs([4, 2]); // NaN
Math.abs({});     // NaN
Math.abs('-42');  // 42
Math.abs('str');  // NaN
Math.abs();       // NaN

Math.round(42.42);  // 42
Math.round(42.5);  // 42
Math.round(-42.5);  // -42
Math.round(-42.51);  // -43

Math.ceil(.95);      // 1
Math.ceil(42);       // 42
Math.ceil(42.004);   // 43
Math.ceil(-0.95);    // -0
Math.ceil(-42);      // -42
Math.ceil(-42.004);  // -42

Math.floor(42.95);    // 42
Math.floor(-42.95);    // -43

Math.max(42, -42);     // 42
Math.max(-42, -95);    // -42
Math.max(-95, 42);     // 42

Math.pow(7, 2);    // 49
Math.pow(8, 2);    // 63
Math.pow(9, 3);    // 729

Math.sqrt(9);     // 3
Math.sqrt(42);    // 6.48074069840786
Math.sqrt(1);     // 1
Math.sqrt(0);     // 0
Math.sqrt(-1);    // NaN
Math.sqrt(-0);    // -0

Math.random()     // 0.5989073280293515
Math.random()     // 0.6563539426446809
Math.random()     // 0.22729826504487116
Math.random()     // 0.046388936153760385
Math.random()     // 0.9079701721798192