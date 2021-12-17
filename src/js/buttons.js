import * as TYPES from './constants.js';

class Button {
  constructor(id, type, value = null) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.el = document.getElementById(id);
  }

  //Bind onclik function to el
  set onclick(func) {
    this.el.onclick = func;
  }
}

const resultBtn = new Button('result', TYPES.RESULT);

const clearBtn = new Button('clear', TYPES.CLEAR);
const historyBtn = new Button('history', TYPES.HISTORY);

const divideBtn = new Button('divide', TYPES.OPERATIONAL, '&divide;');
const multiplyBtn = new Button('multiply', TYPES.OPERATIONAL, '&times;');
const plusBtn = new Button('plus', TYPES.OPERATIONAL, '+');
const minusBtn = new Button('minus', TYPES.OPERATIONAL, '-');
const equalBtn = new Button('equal', TYPES.EQUAL, '=');

const sevenBtn = new Button('seven', TYPES.NUMERIC, '7');
const eightBtn = new Button('eight', TYPES.NUMERIC, '8');
const nineBtn = new Button('nine', TYPES.NUMERIC, '9');
const fourBtn = new Button('four', TYPES.NUMERIC, '4');
const fiveBtn = new Button('five', TYPES.NUMERIC, '5');
const sixBtn = new Button('six', TYPES.NUMERIC, '6');
const oneBtn = new Button('one', TYPES.NUMERIC, '1');
const twoBtn = new Button('two', TYPES.NUMERIC, '2');
const threeBtn = new Button('three', TYPES.NUMERIC, '3');
const zeroBtn = new Button('zero', TYPES.NUMERIC, '0');
const dotBtn = new Button('dot', TYPES.NUMERIC, '.');


const btns = {
  resultBtn,
  clearBtn,
  historyBtn,
  divideBtn,
  multiplyBtn,
  plusBtn,
  minusBtn,
  equalBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  zeroBtn,
  dotBtn
}

export default btns;