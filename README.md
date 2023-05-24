## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone and run

```bash
git clone https://github.com/agustinsiles/swapi-app.git
cd swapi-app
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Challenge questions

A closure is where a function has access to its parent function's scope. A parent function can declare its variables and it can have child functions. These child functions will have access to its parent's scope even if they get called at different times and the parent function was already executed. There are multiple examples of this in this small project. Please take a look at the comments mainly in the App.tsx file.

Potential side-effects in any function can be making HTTP requests (we have some exmaples in the code here), mutating a global variable or a variable declared outside of the function's scope, making changes to the DOM, changing a React state or any other updates that would affect parts of the code outside of this given function. This should be avoided when possible but sometimes they are needed and expected, like making HTTP calls or updating state.
