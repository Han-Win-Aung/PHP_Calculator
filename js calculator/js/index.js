/*DOM ELEMENTS*/
const numBtns = document.querySelectorAll('[data-num]');
const screen = document.querySelector('.calculator__screen-inner');
const operators = document.querySelectorAll('[data-op]');
const clear = document.querySelector('.clear');
const correct = document.querySelector('.correct');
const equals = document.querySelector('.equal');
/*REASSIGNABLE VALUES*/
let operator;
let numString;
let argsArray = [];

/*FUNCTIONALITY*/
//write input from number keys to screen
function toScreen(){
  if(screen.innerHTML === 'Err' || screen.innerHTML === 'NaN'){
        screen.innerHTML = '';
    }
    screen.innerHTML += this.dataset.num;
}

//clear screen
function clearScreen(){
    screen.innerHTML = '';
}

//remove last digit on screen
function removeLast(){    
    let corrected = screen.innerHTML.trim().split("");
    corrected.pop();
    screen.innerHTML = corrected.join('');
}

//store operator and first argument
function store(){
    if(equals.disabled = true){
        equals.disabled = false;
    }
    argsArray = [];
    numString = parseFloat(screen.innerHTML.trim());
    clearScreen();
    operator = this.dataset.op;
    argsArray.push(numString);
    argsArray.push(operator);
}

//resolve based on operator and operands
function resolve(){
    switch(argsArray[1]){
        case "+":
        screen.innerHTML = argsArray[0] + parseFloat(screen.innerHTML.trim());
        break;
        case "-":
        screen.innerHTML = argsArray[0] - parseFloat(screen.innerHTML.trim());
        break;
        case "*":
        screen.innerHTML = argsArray[0] * parseFloat(screen.innerHTML.trim());
        break;
        case "/":
        screen.innerHTML = argsArray[0] / parseFloat(screen.innerHTML.trim());
        break;
        case"**":
        screen.innerHTML = argsArray[0] ** parseFloat(screen.innerHTML.trim());
        break;
        default:
        screen.innerHTML = "Err";
    }

    equals.disabled = true;
}

/*LISTENERS*/
numBtns.forEach(btn => btn.addEventListener('click', toScreen));
clear.addEventListener('click', clearScreen);
operators.forEach(op => op.addEventListener('click', store));
equals.addEventListener('click', resolve);
correct.addEventListener('click', removeLast);