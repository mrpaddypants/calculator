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

let calcNum1 = 0;
let calcNum2 = 0;
let calcOperator = "";

function clearScrn() {
    clearBtn.addEventListener("click", () => {
        location.reload();
    });
}

// number buttons on the calculator
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        displayScrn.textContent += numBtn.textContent;
        calcNum1 = numBtn.textContent;
        calcNum1 = Number(calcNum1);
        console.log(calcNum1);
    });
})


//operator buttons on the calculator
const operatorBtns = document.querySelectorAll(".oprBtn");
operatorBtns.forEach((oprBtn) => {
    oprBtn.addEventListener("click", () => {
        displayScrn.textContent += oprBtn.textContent;
        calcOperator = oprBtn.textContent;
    });
});



// other entities
const clearBtn = document.querySelector(".clearBtn");
const backBtn = document.querySelector(".backBtn");
const dotBtn = document.querySelector(".dotBtn");
const displayScrn = document.querySelector(".display");
const equalBtn = document.querySelector(".equalBtn");



let result = 0;

function operate(operator, calcNum1) {
        if (operator === "+") {
            result = add(calcNum1, calcNum1);
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
    operate(calcOperator, calcNum1);
})