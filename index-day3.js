//example of array and loop through it

const browsers=['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];
console.log("First browsers:", browsers[0]);
console.log("total browsers:",browsers.length);

for(const browser of browsers){
    console.log("Testing on Browser Name:", browser);
}

//example of object and access its properties
const user={
    name:"Viswanath",
    experience:13,
    role:"Automation Manager"
};
console.log("User Name:", user.name);
console.log("User Experience:", user.experience, "years");
console.log("User Role:", user.role);

//objects with conditional statements
if(user.experience>10){
    console.log(user.name + " is a Senior " + user.role);
}   else{
    console.log(user.name + " is a Junior " + user.role);
}

// demonstrate arrow function

const greetUser=(userName)=>{
    return `Hello, ${userName}! Welcome to playwright Training!.`;
};

console.log(greetUser(user.name));


//demo for template literals

console.log(`User ${user.name} has ${user.experience} years of experience as an ${user.role}.`);