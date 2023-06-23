const num = 42
const string = '42.73'

let answer

answer = parseInt(string) // @returns 42 as an integer
console.log(answer) // @logs 42

answer = parseFloat(string) // @returns 42.73 as a decimal
console.log(answer) // @logs 42.73

answer = num.toString() // @returns 42 as a string
console.log(answer) // @logs '42'

answer = string.split('') // @splits into individual characters and returns [ '4', '2', '.', '7', '3' ]
console.log(answer) // @logs [ '4', '2', '.', '7', '3' ]
