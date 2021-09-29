let even_predicat = function(value) {
    if (!((value % 2) == 0))
        return false;
    else
        return true;
    /* check whether the value is even 
     (a number is even when the remainder of its division by 2 is equal to 0)
     return true if the value is even or false when the value is odd 
   */
};

let odd_predicat = function(value) {
    if ((value % 2) == 0)
        return false;
    else
        return true;
    /*
    check whether the value is even 
     return true if the value is even or false when the value is odd
    */
};

let undefined_predicate = function(value) {
    if (value === undefined)
        return true;
    else
        return false;
    /* 
        check and return a boolean value to indicate 
        whether the given value is undefined
         (be careful with the implicit coercion) 
    */

};

let null_predicate = function(value) {
    if (value === null)
        return true;
    else
        return false;
    /* 
        check and return a boolean value to indicate 
        whether the given value is null
         (be careful with the implicit coercion) 
    */

};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function(predicat, value) {
    return (predicat(value));
    // apply the predicate to the value and return the result
};


console.log(check(even_predicat, 9));
console.log(check(odd_predicat, 8));
console.log(check(odd_predicat, 9));
console.log(check(even_predicat, 8));
let x;
console.log(check(undefined_predicate, x));
console.log(check(null_predicate, x));