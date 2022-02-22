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
gbPlusBtn.addEventListener("click", gbAddFunction);
const gbMinusBtn = document.querySelector("#minus-gb")
gbMinusBtn.addEventListener("click", gbSubFunction);

const gbAmount = document.querySelector('#qty-gb')


const ccPlusBtn = document.querySelector("#add-cc")
ccPlusBtn.addEventListener("click", ccAddFunction);
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener("click", ccSubFunction)

const ccAmount = document.querySelector('#qty-cc')


const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener("click", sugarAddFunction)
const sugarMinBtn = document.querySelector('#minus-sugar')
sugarMinBtn.addEventListener("click", sugarSubFunction)

const sugarAmount = document.querySelector('#qty-sugar')


const totalAmount = document.querySelector('#qty-total')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event Listenter Functions

function gbAddFunction(){
    gb++
    console.log(gb)
    gbAmount.innerHTML = gb
    totalAmount.innerHTML = gb+cc+sugar
    return
}
function gbSubFunction(){
    if (gb >= 0){
        gb--
    }
    console.log(gb)
    gbAmount.innerHTML = gb
    totalAmount.innerHTML = gb+cc+sugar
    return
}
function ccAddFunction(){
    cc++
    console.log(cc)
    ccAmount.innerHTML = cc
    totalAmount.innerHTML = gb+cc+sugar
    return
}
function ccSubFunction(){
    if(cc >= 0){
        cc--
    }
    console.log(cc)
    ccAmount.innerHTML = cc
    totalAmount.innerHTML = gb+cc+sugar
    return
}
function sugarAddFunction(){
    sugar++
    console.log(sugar)
    sugarAmount.innerHTML = sugar
    totalAmount.innerHTML = gb+cc+sugar
    return
}
function sugarSubFunction(){
    if (sugar >= 0){
        (sugar--)
    }
    console.log(sugar)
    sugarAmount.innerHTML = sugar
    totalAmount.innerHTML = gb+cc+sugar
    return
}
// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons.