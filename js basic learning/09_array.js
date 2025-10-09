const myArr =[1,2,3,4,5]
myArr.push(6)
myArr.pop()
myArr.unshift(4)  //so time consuming for large arrays because of shifting every element..
myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(4))
// console.log(myArr.indexOf(0)) //give -1 ,it means no presency.

// const newArr = myArr.join()
// console.log(typeof myArr)
// console.log(typeof newArr)
// console.log(newArr)

// *************slice and splice********
/*
Actually, we are checking that which  method will affect the array and mostly, in the interview, this is the
important question ever asked, when we use slice then it will take  a section which i want and the last element
will not be taken as we know, in splice we do the same thing but the last element will also come.
But the major differnce is that , slice will not affect the original array but splice does it, it just take out 
that part from the original array, and this is the main difference....
*/

// Example:-

console.log(myArr.slice(1,4)) //[2,3,4]
console.log(myArr) //no change in array after slice.... [1,2,3,4,5]

console.log(myArr.splice(1,4)); //[2,3,4,5]
console.log(myArr)  //change in array after splice....[1]