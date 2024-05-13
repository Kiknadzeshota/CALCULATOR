let but = document.querySelectorAll("button");
let inp = document.querySelector("input")
let AC = document.getElementById("AC")

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    display.value = eval(display.value)
}

function delate(){
    display.value = display.value.toString().slice(0,-1)
}