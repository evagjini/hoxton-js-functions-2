







//  - Prompt the user for a letter

let userPickALetter = String(prompt("Choose a Letter!"));


//  - Find all the users who's name contains the letter 

let foundUsers = users.filter(function (user)
{ return user.name.includes(userPickALetter)

})
// console.log(foundUsers)


//  - Say hi to those users in the console - but only 1 greeting every 2 seconds.

setTimeout (function ()
{console.log(`Hi ${foundUsers}`), 2000}
)



//  - Prompt the user for a user ID.



let userId = Number(prompt("Enter your userid"));


//  Using the value, find all the todos that are Incomplete and console.log them.
let findAllTodo = todos.filter(
(todo) => todo.userId === userId && todo.completed === false) 
console.log(findAllTodo)
