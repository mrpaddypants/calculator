let calcNum = 0;
let calcOperator = "";



// number buttons on the calculator
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        displayScrn.textContent += numBtn.textContent;
        calcNum = numBtn.textContent;
        calcNum = Number(calcNum);
        console.log(calcNum);
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
        } else if (calcOperator === "x") {
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

function clearScrn() {
    clearBtn.addEventListener("click", () => {
        location.reload();
    });
}
clearScrn();

equalBtn.addEventListener("click", () => {
    let arrayOfNums = displayScrn.textContent.split(calcOperator).map(function(item) {
        return parseInt(item, 10);
    });
    if (arrayOfNums.length < 2) {
        alert("ERROR");
        location.reload();
    } else {
        operate(arrayOfNums);
    }
});