const myName ="kapil kumar";
var myIncome ="6000k dollars";
let carCount = 4;
isHappy = true;



console.table([myName, myIncome , carCount, isHappy]) //got a good thing to get this way..

/*
Actually, Var keyword is the older one and it was creating the problem because, in the whole
code if somewhere has more that one variables with the same name, then while changing the one
variable, it was updating others too.
so, to get out with it, a new keyword came which is "let" and it was working with block of
scope too and during update the global or scoped variable, they were not disturbing the other. 
*/


               /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//now try to change the name ,i have given it a const

// myName = "bhanu kumar"
// console.log(myName); //it is not acceptable

            /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//now try for let keyword to change the value assigned already...

// carConst = 5;
// console.log(carConst);  //ya it is good to change the values and it is block of scope focused.

            /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// now try for the var keyword...

// myIncome = "1000k dollars"
// console.log(myIncome) //so here i can see that, good to go change the var assigned value too..