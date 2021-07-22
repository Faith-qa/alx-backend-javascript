import Currency from './3-currency';

export default class Pricing {
  constructor(amount = '', currency = '') {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set curency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    const code = (this.currency._code);
    const name = (this.currency._name);
    const money = `${this.amount} ${name} (${code})`;

    return money;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
