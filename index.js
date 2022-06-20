


//  - Say hi to those users in the console - but only 1 greeting every 2 seconds.
//  - Prompt the user for a user ID.
//  Using the value, find all the todos that are Incomplete and console.log them.


//  - Prompt the user for a letter

let userPickALetter = String(prompt("Choose a Letter!"));


//  - Find all the users who's name contains the letter 

const findUsers = users.filter(function (user)
{ return user.name.includes(userPickALetter)

}
)
console.log(`findUsers:`, )
let userIndex = 1