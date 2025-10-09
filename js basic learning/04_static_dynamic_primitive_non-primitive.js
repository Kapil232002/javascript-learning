// *********************🧩 1️⃣ Primitive Data Types ******************************
// ✅ Examples:

// Number, String, Boolean, Null, Undefined, Symbol, BigInt
const number = 2; //number
let userName ="kapil";  //string
const isMarried  =false;  //boolean
let userEmail; //undefined
const userAge = null;  //null

const value =Symbol("123");  //symbol
const value2 = Symbol("123");
console.log(value ===value2); //because symbol is unique , so it will give  false even they seem as same..
const bigInteger = 122343545345453n;  //bigint
console.log(typeof bigInteger)

// 🧠 How they work (accurate explanation):

// When you assign a primitive value to a variable:

// let a = 42;


// The value 42 is stored in a specific memory location inside the call stack (a fast, fixed-size memory area).

// The variable a holds a reference to that memory location.

// Primitive values are immutable — you can’t modify the actual value stored at that memory location.

// If you assign a new value to the same variable:

// a = 50;


// JavaScript allocates a new memory location in the stack for 50,
// and makes a point to this new location.

// The old value (42) becomes unused and is later removed by the garbage collector.

// 🧩 Summary of primitives:

// Stored in: Stack

// Copied by value

// Immutable

// Fast access and cleanup

// *****************🧱 2️⃣ Non-Primitive Data Types ****************************
// ✅ Examples:

// Object, Array, Function, Date, etc.

// 🧠 How they work (accurate explanation):

// When you assign a non-primitive value (like an object or array):

// let person = { name: "Kapil" };


// The object { name: "Kapil" } is stored in the heap memory, which is used for dynamic and variable-sized data.

// The variable person (which lives in the stack) stores a reference (pointer) to that object’s location in the heap.

// When you modify the object:

// person.name = "Rahul";


// you’re not changing the reference — you’re modifying the data inside the heap object.

// If you assign the variable to another one:

// let person2 = person;


// both variables point to the same heap memory address, so a change via one affects the other.

// 🧩 Summary of non-primitives:

// Stored in: Heap (actual value)

// Stack (reference pointer)

// Copied by reference

// Mutable

// Flexible but slightly slower


        //   +++++++++++Static programming++++++++++++

/*Before execution, we declare the datatype of the variable and we cant change that later
before execution, it just check the datatype and need to declare it

like:-
int x =4;  //correct
x = "hello" //incorrect

Example: -
c++, java, go, rust
*/


        //   +++++++++++Dynamic programming++++++++++++

/*It depends on runtime, during runtime it will check the variable datatype and no need
to declare the datatype , it will automatically get the datatype.

like:-
x =4;  //correct and it will auto consider the datatype as int and also can be change further
x = "hello" // correct too and changed , it will nor depend the upper one as int.

Example: -
Javascript, python , ruby,  php
*/

//  *************************note*************
// In JavaScript, an instance is a specific object created from a constructor function or class. It contains its own properties but shares methods and behaviors from the constructor’s prototype. Using the instanceof operator, we can check whether an object is an instance of a particular constructor or class.



