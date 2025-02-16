// Solve the below problems:

// #1) Convert the below async function to remove the async keyword

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

// --------- Answer:



// #2) ADVANCED: Remove the async function from the below wherever possible:
const [users, posts, albums] = await Promise.all(
    urls.map(async function(url) {
    const response = await fetch(url);
    return response.json();
    }), 
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);


// --------- Answer:



// #3  ADVANCED: Try to run this piece of code just as a JS file not inside the browser dev tool, instea using this:
//https://glot.io/new/javascript
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
//!! It will actually give you an error: "await is only valid in async functions and the top level bodies of modules"
//WHY?

// ANSWER: Top Level Await ONLY works inside of a module. We were able to run this code in the chrome dev tools
// because inside the console, it technically runs like a module. 
