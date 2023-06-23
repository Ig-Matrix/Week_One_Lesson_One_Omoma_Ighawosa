const numbers = [70, 60, 50, 40, 30, 20]

let answer = numbers[2] // accesses element at index 2
console.log(answer) // @logs element at index 2 that is, 50

answer = numbers.pop() // removes the last element from the array (20) and returns it (20)
console.log(answer) // @logs the result of the pop() method that is, 20

answer = numbers.push(20) // appends 20 to the end of the numbers array and returns the new array
console.log(numbers) // @logs the result of the push() method that is, [ 70, 60, 50, 40, 30, 20 ]

answer = numbers.shift() // removes the last element of the array and returns the removed element
console.log(answer) // @logs the result of the shift() method that is, 70

answer = numbers.unshift(70) // adds 70 to the beginning of the array and returns the new lenght of the array
console.log(answer) // @logs the result of the unshift() method that is, 6

answer = numbers.splice(0, 2, 100, 90) // removes the first 2 elements starting from index 0 and replaces them with 100 and 90. The function will return the removed elements
console.log(answer) // @logs the result of the splice() method that is, [ 70, 60 ]
console.log(numbers) // @logs the new array containing the new elements added by the splice() method. that is, [ 100, 90, 50, 40, 30, 20 ]
