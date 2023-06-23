const person = {
  name: 'Saka',
  age: 23,
  location: 'Emirates Stadium'
}

let answer = person.name
console.log(answer) // @logs name of person object, that 'Saka'

answer = person.age
console.log(answer) // @logs age of person object, that is '23'

person.country = 'England' // assigns new property called country and gives it a value of England using dot notation
answer = person // reassigns person object to answer variable
console.log(answer) // @logs the answer variable

person.club = 'Arsenal' // assigns club as a new property of person object and assigns it a value of Arsenal
answer = person // reassigns person object to answer variable
console.log(answer) // @logs the answer variable
