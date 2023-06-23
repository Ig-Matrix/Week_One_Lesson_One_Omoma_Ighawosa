const num = 22
const boolean = true
const string = 'This is a string'

console.log(typeof num)// @logs data type number
console.log(typeof boolean) // @logs data type boolean
console.log(typeof string) // @logs data type string

const answer = num == boolean
console.log(answer) // @logs false

console.log(0 == false) // @logs true since false is represented 0 in binary
console.log(0 === false) // @logs false since false is not the same data type (boolean) as 0 (number)

/*
Falsy Values: are those that are considered false when evaluated in a Boolean context.
In JavaScript, the following values are considered falsy: false, 0, '' (empty string), null, undefined, NaN.
When any of these values are evaluated in a Boolean context, they are considered false.

Truthy Values:
Truthy values are those that are considered true when evaluated in a Boolean context.
In JavaScript, almost all values are considered truthy except for the falsy values mentioned above.
Here are some examples of truthy values:
-true: The boolean value true itself.
-Numbers other than zero (e.g., 1, -1, 3.14).
-Non-empty strings (e.g., 'Hello', '0').
-Arrays and objects (even empty ones).
-Functions (even empty ones).
When these values are evaluated in a Boolean context, they are considered true.
*/
