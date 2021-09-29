# se2202_tutorial3

## Task 1: Callback functions - Sending functions as arguments to other functions

Let's say we have two bindings to two numbers and a function that takes two parameters

let x=5, y=6;
let  add = function(a,b) {
       return a + b;
};

When we pass those bindings as arguments to the function as shown in the following statement:

let z = add(x,y);

The parameters of the function would form new bindings to the same values, i.e., inside the function, a will refer to the same value that x refers to, which is 5, and b would refer to the same value of y, which is 6.

Since functions are also values, we can pass them as arguments just like we did with the numbers.
The goal of this task is to exercise this concept. The file callbackFunctions.js has the starter code for this task; update the code according to the comments there.

## Task 2: Functions as return values
Let's start with an 'add function' example 

let  add = function(a,b) {
       let c = a + b;
      return c; <--  when we use a binding with the return keyword its value will be passed to the
                                            caller of the function
};

We can then create another binding to refer to the value returning from the function call

let z = add(5,6);

Since functions are values, we can return them from other functions just like we did with numbers.
The goal of this task is to exercise returning functions as values.

The file returningFunctions.js contains the starter code for this task. Complete the code according to the instructions in the comments.

## Task 3: Closures

The goal of this task is to practice working with closures. The file closures.js contains the starter code for this task. Complete the code according to the instructions in the comments.
