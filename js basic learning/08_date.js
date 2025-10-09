let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())
// console.log(myDate.toTimeString())

let anotherDate = new Date(2025,0,14,12,44,56);
// console.log(anotherDate.toLocaleDateString())
// console.log(anotherDate.toTimeString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// let createdTime = new Date("2025-10-09");
// console.log(createdTime.getTime())

let newDate = new Date()
console.log(newDate.getDay());

// backticks is called string interpolation

newDate.toLocaleString('default', {
    weekday : "long"
})