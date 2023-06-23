const isTrue = true
const isFalse = false

let answer = isTrue && isFalse
console.log(answer) // @logs false

answer = !isTrue && !isFalse
console.log(answer) // @logs false

answer = !isTrue && !isFalse
console.log(answer) // @logs false

answer = !isTrue && !isFalse
console.log(answer) // @logs false

answer = isTrue || isFalse
console.log(answer) // @logs true

answer = !isTrue || isFalse
console.log(answer) // @logs false

answer = isTrue || !isFalse
console.log(answer) // @logs true

answer = !isTrue || !isFalse
console.log(answer) // @logs true

if (isTrue) {
  console.log('The statement is true') // @logs 'The statement is true' because isTrue is true
} else {
  console.log('The statement is not true') // @logs case when isTrue is not true
}

if (isFalse === false) {
  console.log('The statement is false') // @logs 'The statement is false' because isFalse is false
} else {
  console.log('The statement is not false') // @logs case when isFalse is not false
}
