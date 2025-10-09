// singleton

//object literals:- to declare the object

const mySym = Symbol("key1") //symbol
const userInfo = {
    userName : "kapil",
    "fullName" : "kapil kumar",
    [mySym] : "mykey1",
    userEmail : "kapil@gmail.com",
    userAge : 23,
    lastLoginDays :["monday", "saturday"]
}

// console.log(userInfo["userEmail"])
// console.log(userInfo.fullName)
// console.log(userInfo[mySym])

// // i can freeze the object and changes will not be apply after this
// Object.freeze(userInfo)
// userInfo.userEmail = "kumar@gmail.com"; 
// console.log(userInfo)  //no change because of object freeze 


userInfo.greeting = function() {
    console.log(`hello i am ${this.userName}`)
}
userInfo.greeting()
