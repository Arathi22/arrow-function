import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById("root"));

//arrow function.............................................

// var numbers = [3, 56, 2, 48, 5];

//this is the normal way we do the map function
// const newNumber = numbers.map(function (x) {
//     return x * x;
// });

//using arrow function   ( => )
// const newNumber = numbers.map((x) => {//(x) it is the input and others are the body of the function
//     return x * x;
// });

//using simplified arrow function   ( => ).
//this is only possible when only one input is there. other waise we have to do the above method.
// const newNumber = numbers.map(x => x * x);

// console.log(newNumber);

//.......................................................................
//simplyifing with arrow function

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

// Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
// const newNumbers = numbers.find(num => num > 10)

//FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(num => num > 10);
// console.log(newNumbers);