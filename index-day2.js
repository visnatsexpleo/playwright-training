// create variables to store user information

const userName = "Viswanath ";
const age = 35;
const isAutomationEngineer = false;

console.log("User Name: ",  userName);
console.log("Age: " ,age);
console.log("Is Automation Engineer: ",isAutomationEngineer);

//write a sample funtion
function greetUser(name) {
console.log("Hello, " + name + "!");
}

//call that function
greetUser(userName);

//conditional statements

if (isAutomationEngineer) {
    console.log(userName + " is an Automation Engineer.");
}
else {
    console.log(userName + " is not an Automation Engineer.");
}   


//loop through numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
