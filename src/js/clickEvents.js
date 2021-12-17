import Calculator from './calculator.js';
import btns from './buttons.js';

let typedNums = [];
let calculator = new Calculator();
let screenText = 0;
let history = 0;

const display = function(text) {
  btns.resultBtn.el.innerHTML = text;
}

export const numericBtnFunc = function (key) {
  return function () {
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
}

export const oprationalBtnFunc = function (key) {
  return function () {
    calculator.operatorType = btns[key].value;
    typedNums = [];
    screenText = `${calculator.firstArg} ${calculator.operatorType}`;
    display(screenText);
  }
}

export const equalBtnFunc = function () {
  screenText = calculator.calculate();
  display(screenText);
  history = screenText;
  screenText = '0';
  typedNums = [];
  calculator = new Calculator();
}

export const clearBtnFunc = function() {
  screenText = '0';
  display('0');
  typedNums = [];
  calculator = new Calculator();
}

export const historyBtnFunc = function() {
  typedNums = [];
  calculator = new Calculator(history);
  display(history);
  screenText = '0';
}

