import btns from './buttons.js';
import * as TYPES from './constants.js';
import { numericBtnFunc, oprationalBtnFunc, equalBtnFunc, clearBtnFunc, historyBtnFunc } from './clickEvents.js';

// assign onclick fucntion to numeric buttons
for (const key in btns) {
  switch (btns[key].type) {
    case TYPES.NUMERIC:
      btns[key].onclick = numericBtnFunc(key);
      break;
    
    case TYPES.OPERATIONAL:
      btns[key].onclick = oprationalBtnFunc(key);
      break;

    case TYPES.EQUAL:
      btns[key].onclick = equalBtnFunc;
      break;
    
    case TYPES.CLEAR:
      btns[key].onclick = clearBtnFunc;
      break;
    
    case TYPES.HISTORY:
      btns[key].onclick = historyBtnFunc;
  
    default:
      break;
  }
}


