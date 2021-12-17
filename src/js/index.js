import btns from './buttons.js';
import * as TYPES from './constants.js';
import Calculator from './calculator.js';

const display = function(text) {
  btns.resultBtn.el.innerHTML = text;
}

let typedNums = [];
let calculator = new Calculator();
let screenText = 0;
let history = 0;

// assign onclick fucntion to numeric buttons
for (const key in btns) {
  switch (btns[key].type) {
    case TYPES.NUMERIC:
      btns[key].onclick = function() {
        if (typedNums.length === 0 && btns[key].value === '0') {
          return;
        }
        typedNums.push(btns[key].value);
        const parsedNum = typedNums.join('') === '.' ? 0 : parseFloat(typedNums.join(''));
        if (calculator.operatorType === null) {
          calculator.firstArg = parsedNum;
          screenText = parsedNum;
        } else {
          calculator.secondArg = parsedNum;
          screenText = `${calculator.firstArg} ${calculator.operatorType} ${parsedNum}`;
        }
        display(screenText);
      }
      break;
    
    case TYPES.OPERATIONAL:
      btns[key].onclick = function() {
        calculator.operatorType = btns[key].value;
        typedNums = [];
        screenText = `${calculator.firstArg} ${calculator.operatorType}`;
        display(screenText);
      }
      break;

    case TYPES.EQUAL:
      btns[key].onclick = function() {
        screenText = calculator.calculate();
        display(screenText);
        history = screenText;
        screenText = '0';
        typedNums = [];
        calculator = new Calculator();
      }
      break;
    
    case TYPES.CLEAR:
      btns[key].onclick = function() {
        screenText = '0';
        display('0');
        typedNums = [];
        calculator = new Calculator();
      }
      break;
    
    case TYPES.HISTORY:
      btns[key].onclick = function() {
        typedNums = [];
        calculator = new Calculator(history);
        display(history);
        screenText = '0';
      }
  
    default:
      break;
  }
}


