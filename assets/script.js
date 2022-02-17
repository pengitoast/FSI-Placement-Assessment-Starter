// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Adrian Smith" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector("#minus-gb")
const gbAmount = document.querySelector('#qty-gb')
const ccPlusBtn = document.querySelector("#add-cc")
const ccMinusBtn = document.querySelector('#minus-cc')
const ccAmount = document.querySelector('#qty-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinBtn = document.querySelector('#minus-sugar')
const sugarAmount = document.querySelector('#qty-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener("onclick", function(){
    if (gb > 0); (gb - 1)
}
gbPlusBtn.addEventListener("onclick", function(){
    (gbAmount = gb + 1)
}
// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons