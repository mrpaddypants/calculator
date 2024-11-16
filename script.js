// operator functions
let add = function (num1, num2) {
    return num1 + num2;
}

let subtract = function (num1, num2) {
    return num1 - num2;
}

let multiply = function (num1, num2) {
    return num1 * num2;
}

let divide = function (num1, num2) {
    if (num2 === 0) {
        return false;
    } else {
        return num1 / num2;
    }
}

function clearScrn() {
    clearBtn.addEventListener("click", () => {
        displayScrn.innerHTML = "";
    });
}

// number buttons on the calculator
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((numBtn) => {
    console.log(numBtn.textContent);
    
})


const zeroBtn = document.querySelector(".zeroBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");

//operator buttons on the calculator
const operatorBtns = document.querySelectorAll(".oprBtn");
const equalBtn = document.querySelector(".equalBtn");
const divisionBtn = document.querySelector(".divisionBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const addBtn = document.querySelector(".addBtn"); 

// other entities
const clearBtn = document.querySelector(".clearBtn");
const backBtn = document.querySelector(".backBtn");
const dotBtn = document.querySelector(".dotBtn");
const displayScrn = document.querySelector(".display");



let calcNum1;
let calNum2;
let calcOperator;

function operate(operator, num1, num2) {
        let result;
        if (operator === "+") {
            result = add(num1, num2);
            displayScrn.innerHTML = result;
        } else if (operator === "-") {
            result = subtract(num1, num2);
            displayScrn.innerHTML = result;
        } else if (operator === "x") {
            result = multiply(num1, num2);
            displayScrn.innerHTML = result;
        } else if (operator === "/") {
           result = divide(num1, num2);
           displayScrn.innerHTML = result;
        }
    }

clearScrn();

equalBtn.addEventListener("click", () => {
    operate();
})