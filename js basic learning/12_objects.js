// 🧩 2️⃣ Object Destructuring
// 🧾 Without destructuring:

const userInfo = { userName: "Kapil", userage: 23, usercity: "Delhi" };

let userName = user.name;
let userage = user.age;
let usercity = user.city;

console.log(userName, userage, usercity); // Kapil 23 Delhi


// ✅ With destructuring:
const user = { name: "Kapil", age: 23, city: "Delhi" };

const { name, age, city } = user;

console.log(name, age, city); // Kapil 23 Delhi


// 💡 You can rename while destructuring:

const { name: username, age: userAge } = user;
console.log(username, userAge); // Kapil 23