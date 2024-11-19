let calcNum = 0;
let calcOperator = "";
let displayScrnValue = "";
let result = 0;

function clearScrn() {
    location.reload();
}

function back() {
    displayScrnValue = displayScrn.textContent;
    displayScrnValue = displayScrnValue.slice(0, -1);
    displayScrn.textContent = displayScrnValue;
}

function operate(array) {
    if (calcOperator === "+") {
        result = array.reduce((total, next) => {
            return total + next;
        });
        displayScrn.textContent = result;
    } else if (calcOperator === "-") {
        result = array.reduce((total, next) => {
            return total - next;
        });
        displayScrn.textContent = result;
    } else if (calcOperator === "*") {
        result = array.reduce((total, next) => {
            return total * next;
        });
        displayScrn.textContent = result;
    } else if (calcOperator === "/") {
        result = array.reduce((total, next) => {
            if (next === 0) {
                alert("You cannot divide numbers by 0, you dumbass.")
            } else {
                return total / next;
            }
        });
        displayScrn.textContent = Math.round(result * 100) / 100;
    }
}

// number buttons on the calculator
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        displayScrn.textContent += numBtn.textContent;
        calcNum = numBtn.textContent;
        calcNum = Number(calcNum);
    });
});

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
clearBtn.addEventListener("click", () => {
    clearScrn();
})
const backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", () => {
    back();
});

const dotBtn = document.querySelector(".dotBtn");
dotBtn.addEventListener("click", () => {

    displayScrn.textContent += dotBtn.textContent;
    
});

const displayScrn = document.querySelector(".display");

const possibleKeys = ["+", "-", "*", "/", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Enter", "Backspace"];

document.addEventListener("keydown", (e) => {
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        displayScrn.textContent += e.key;
        calcOperator = e.key;
    } else if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
        displayScrn.textContent += e.key;
        calcNum = e.key;
    } else if (e.key === "Enter") {
        let arrayOfNums = displayScrn.textContent.split(calcOperator).map(function(item) {
            return parseFloat(item, 10);
        });
        if (arrayOfNums.length < 2) {
            displayScrn.textContent = "Error";
            location.reload();
        } else {
            operate(arrayOfNums);
        }
    } else if (e.key === "Backspace") {
        back();
    } else if (e.key === "c") {
        clearScrn();
    }
    
});

const equalBtn = document.querySelector(".equalBtn");

equalBtn.addEventListener("click", () => {
    let arrayOfNums = displayScrn.textContent.split(calcOperator).map(function(item) {
        return parseFloat(item, 10);
    });
    if (arrayOfNums.length < 2) {
        displayScrn.textContent = "Error";
        location.reload();
    } else {
        operate(arrayOfNums);
    }
});
