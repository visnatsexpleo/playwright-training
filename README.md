
Playwright Training – Node.js & JavaScript Foundations

This repository documents my **step-by-step learning journey** into **Node.js, JavaScript, and Playwright automation**, following an industry-style, incremental approach.

The goal is to build a **solid foundation first**, before introducing Playwright test automation.
 This repository is intentionally built day by day, with small commits, to reflect real-world learning and professional Git practices.


What This Repository Covers (So Far)

* Environment setup for Node.js development
* JavaScript fundamentals required for automation
* Hands-on coding with clear outputs
* Clean Git history with daily commits

---

Day 1 – Environment Setup & Mindset

 Objective

Set up the development environment and run the first Node.js program successfully.


Tools Installed

* **Node.js (LTS)** – to run JavaScript outside the browser
* **npm** – Node package manager (comes with Node.js)
* **VS Code** – code editor
* **Git** – version control

---
What Was Done

1. Verified Node.js installation:

   ```bash
   node -v
   npm -v
   ```

2. Created a project folder:

   ```bash
   mkdir playwright-training
   cd playwright-training
   ```

3. Created the first JavaScript file:

   ```js
   console.log("Hello, Automation World!");
   ```

4. Ran the script using Node.js:

   ```bash
   node index.js
   ```

5. Initialized Git:

   ```bash
   git init
   ```

6. Added `.gitignore` to exclude `node_modules`:

   ```text
   node_modules/
   ```

7. Made the first commit:

   ```bash
   git commit -m "Day 1: initial project setup and first Node script"
   ```

---

Key Learnings

* What Node.js is and why Playwright depends on it
* How to run JavaScript from the terminal
* Basic terminal navigation
* Initial Git workflow

---

Day 2 – JavaScript Basics (Automation-Focused)

Objective

Learn core JavaScript concepts that are heavily used in test automation.

---

Concepts Covered

* Variables (`const`, `let`)
* Data types (string, number, boolean)
* Functions
* Conditional logic (`if / else`)
* Loops (`for`)

---

What Was Implemented

A new file was created to practice JavaScript fundamentals:
**`index-day2.js`**

Example Concepts Practiced

```js
const userName = "Viswanath";
const age = 35;
const isAutomationEngineer = true;
```

```js
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
```

```js
if (isAutomationEngineer) {
  console.log(`${userName} is an Automation Engineer.`);
} else {
  console.log(`${userName} is not an Automation Engineer.`);
}
```

```js
for (let i = 1; i <= 4; i++) {
  console.log(`Number: ${i}`);
}
```

Each block was executed using:

```bash
node index-day2.js
```

---

Key Learnings

* How JavaScript logic controls automation behavior
* How functions and conditions mirror test flow
* Importance of testing both `true` and `false` paths
* How loops are used for repeated validations

---

Day 3 – JavaScript Essentials for Testing

Objective

Learn modern JavaScript patterns used extensively in Playwright tests.

---

 Concepts Covered

* Arrays
* Objects
* Arrow functions
* Template literals

---

What Was Implemented

A new practice file was created:

📄 **`index-day3.js`**

#### Arrays

```js
const browsers = ["chromium", "firefox", "webkit"];
```

#### Objects

```js
const user = {
  name: "Viswanath",
  role: "Automation Engineer",
  experience: 5,
};
```

#### Arrow Functions

```js
const greetUser = (name) => {
  return `Hello ${name}, welcome to Playwright training!`;
};
```

#### Template Literals

```js
console.log(
  `User ${user.name} with role ${user.role} has ${user.experience} years of experience`
);
```

Executed using:

```bash
node index-day3.js
```

---

 Key Learnings

* How arrays represent lists of test data
* How objects model real-world entities
* Why arrow functions are the standard in Playwright
* How template literals improve readability and logging

---

Git & GitHub Workflow

* Small, daily commits
* Clear commit messages
* Local Git repository connected to GitHub
* Authentication handled using GitHub Personal Access Token (PAT)

**Repository Link:**
[https://github.com/visnatsexpleo/playwright-training](https://github.com/visnatsexpleo/playwright-training)

---

 What’s Next

The next phase will introduce **Node.js fundamentals**, including:

* `npm`
* `package.json`
* Dependency management
* Preparing the project for Playwright installation

> This README will be **updated daily** as the learning journey continues.

---

Author

**Viswanath Natarajan**
Learning Playwright & Automation Engineering, Step-by-step, hands-on approach

