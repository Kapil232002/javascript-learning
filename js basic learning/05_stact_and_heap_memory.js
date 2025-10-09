// ********************stack memory*******************

/*Actually, all the primitive datatypes use stack memory to store the data, but here is
one thing
suppose i have created the variable and assigned a value to it, not i have created another
variable and assign the first variable to this, now i will change the value of second variable
and valuefor first one must be change  but here both have different value because
it only give the copy of the first variable to the second variable and it will only change the value
of copy one not the original one.
*/

myName ="kapil";
myName2 = myName;
myName2 ="sonu";
console.log(myName) //kapil
console.log(myName2) //sonu

// **************heap memory ******************

/* 
Non primitive use the heap memory. Here, create one variable and create another object and assign the first object into it,
now both the objects names are in stack memory and refer to the original data in the heap memory,
of the first object, it means no copy  assign to the another object,
if change in first one will also updat the second one
*/

userOne ={
    email :"kapil@gmail.com",
    Age :"23"
}

userTwo = userOne;

userTwo.email = 'kumar@gmail.com';
console.log(userOne); //kumar@gmail.com
console.log(userTwo); //kumar@gmail.com



// #################note ###############

// check the handwritten notes in black diary to understand more about using diagram
