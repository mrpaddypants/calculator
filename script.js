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


// number buttons on the calculator
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        displayScrn.textContent += numBtn.textContent;
        calcNum = numBtn.textContent;
        calcNum = Number(calcNum);
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
clearBtn.addEventListener("click", () => {
    clearScrn();
})
const backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", () => {
    back();
});

const dotBtn = document.querySelector(".dotBtn");
const displayScrn = document.querySelector(".display");
document.addEventListener("keydown", (e) => {
    displayScrn.textContent += e.key;
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        calcOperator = e.key;
    } else if (e.key === 0 || e.key === 1 || e.key === 2 || e.key === 3 || e.key === 4 || e.key === 5 || e.key === 6 || e.key === 7 || e.key === 8 || e.key === 9) {
        calcNum = e.key;
    } else if (e.key === "Enter") {
        let arrayOfNums = displayScrn.textContent.split(calcOperator).map(function(item) {
            return parseInt(item, 10);
        });
        if (arrayOfNums.length < 2) {
            displayScrn.textContent = "Error";
            location.reload();
        } else {
            operate(arrayOfNums);
        }
    } else if (e.key === "Backspace") {
        back();
    }
    
})
const equalBtn = document.querySelector(".equalBtn");

equalBtn.addEventListener("click", () => {
    let arrayOfNums = displayScrn.textContent.split(calcOperator).map(function(item) {
        return parseInt(item, 10);
    });
    if (arrayOfNums.length < 2) {
        displayScrn.textContent = "Error";
        location.reload();
    } else {
        operate(arrayOfNums);
    }
});





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



