// const tinderUser = {} //using object literal , so it is not singleton..

const tinderUser = new Object( ) //using construtor function , so it is sigleton

tinderUser.id = "1234ab"
tinderUser.name = "kapil"
// console.log(tinderUser)

const regularUser = {
    email : "kapil@gmail.com",
    fullname : {
        firstname :"kapil",
        lastname : 'kumar'
    }
}
// console.log(regularUser.fullname.firstname)

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a",4: "b"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3)

const obj4 = {...obj1, ...obj2} //..is spread operator
// console.log(obj4)

const users = [
{
    id :1,
    email :"k@gmail.com"
},
{
    id:2,
    email : "b@gmail.com"
}
]
// console.log(users[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('name'))
