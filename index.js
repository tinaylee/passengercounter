// document.getElementByID("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")


function increment() {
  count = count + 1
  countEl.innerText = count
  console.log(count)
}

function save() {
  console.log(count)
}

let username = "tina"

let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)