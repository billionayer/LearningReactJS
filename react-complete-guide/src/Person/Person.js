/*

Lecture Notes:

1.  Recommend use of arrow function syntax to get advantages of using "this" keyword.
2.  Make sure to import React from 'react'
3.  Make sure to export component using the export default syntax
4.  One key thing.  If you want to utilize javascript in your JSX HTML you have to wrap it in curly braces
    Restrictions:  We cannot define a class or use complex code.  Basically inline calls.


    Making this class dynmamic

    If we want to use dynamically assigned properties we pass in a parameter to function called props.

    Note:  Using the 'this' keyword would only work if this function had an actual property called 'props'; But since we are passing a a param
    then we just use as is.

    "children" is a reserved word for props parameter.
    children could be other React Components

*/


import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am { props.age } years old</p>
            <p>{props.children}</p>
    </div>
    );

};

export default person;