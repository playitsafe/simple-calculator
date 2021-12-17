const math = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '&times;': function (x, y) { return x * y },
  '&divide;': function (x, y) {
    try {
      return x / y
    } catch (e) {
      return 'Error';
    }
  }
}


export default class Calculator {
  constructor(firstArg = 0, secondArg = 0, operatorType = null, result = 0) {
    this.firstArg = firstArg;
    this.secondArg = secondArg;
    this.operatorType = operatorType;
    this.result = 0;
  }

  calculate() {
    if (this.operatorType === null) {
      this.result = this.firstArg.toFixed(12);
    } else {
      this.result = math[this.operatorType](this.firstArg, this.secondArg).toFixed(12);
    }
    return this.result === 'Infinity' ? 'Error' : parseFloat(this.result);
  }
}