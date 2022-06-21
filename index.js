







//  - Prompt the user for a letter

let userPickALetter = String(prompt("Choose a Letter!"));


//  - Find all the users who's name contains the letter 

let foundUsers = users.filter(function (user)
{ return user.name.includes(userPickALetter)

})



console.log(userPickALetter)


//  - Say hi to those users in the console - but only 1 greeting every 2 seconds.

let i =0

const intervalId = setInterval (()=>{
    let user = foundUsers[1]
    if(user){
        console.log(`Hi  ${user.name}!`)
        i++

    } else{
        clearInterval(intervalId)
    }

},2000)

// // Like a loop but over time
// let i = 0

// let intervalId = setInterval(() => {
//   let user = usersWithLetter[i]
//   console.log(`Hi ${user.name}!`)
//   i++
// }, 2000)

// setTimeout(() => {
//   clearInterval(intervalId)
// }, usersWithLetter.length * 2000)


//  - Prompt the user for a user ID.



let userId = Number(prompt("Enter your userid"));


//  Using the value, find all the todos that are Incomplete and console.log them.
// let findAllTodo = todos.filter(
// todo => todo.userId === userId && todo.completed === false 

// )
// console.log(findAllTodo)

let findAllTodo = todos
.filter(todo=> todo.userId===userId && todo.completed===false)
.map (todo=>todo.title)
console.log(findAllTodo)
