const name = 'Omoma'
let answer
answer = name + ' ' + 'Matrix' // concatenates string
console.log(answer) // @logs 'Omoma Matrix'

answer = answer.toUpperCase() // @returns  upper case string
console.log(answer) // @logs 'OMOMA MATRIX'

answer = answer.toLowerCase() // @returns  lower case string
console.log(answer) // @logs 'omoma matrix'

answer = answer.slice(0, 6) // @returns  string from index 0 to index 6
console.log(answer) // @logs 'omoma'
