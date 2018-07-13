/*

Lecture Notes:

1.  Recommend use of arrow function syntax to get advantages of using "this" keyword.
2.  Make sure to import React from 'react'
3.  Make sure to export component using the export default syntax
4.  One key thing.  If you want to utilize javascript in your JSX HTML you have to wrap it in curly braces
    Restrictions:  We cannot define a class or use complex code.  Basically inline calls.

*/


import React from 'react';

const person = () => {
    return <p>I'm a Person and I am { Math.floor(Math.random() * 30) } years old</p>
}

export default person;