let number1 = 8
let number2 = 2

let num1 = document.getElementById("num1").textContent = number1
let num2 = document.getElementById("num2").textContent = number2


function add(){
    let result = number1 + number2
    document.getElementById("result").textContent = result
}

function sub(){
    let result = number1 - number2
    document.getElementById("result").textContent = result
}

function divide(){
    let result = number1 / number2
    document.getElementById("result").textContent = result
}

function multiply(){
    let result = number1 * number2
    document.getElementById("result").textContent = result
}