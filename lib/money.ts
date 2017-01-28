/**
 * This file is part of the JS Money library
 *
 * Copyright (c) 2014 David Kalosi
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


import { extend, isFunction, isNaN, isObject, isPlainObject, isString} from 'lodash'


var isInt = function (n) {
    return Number(n) === n && n % 1 === 0;
};

var decimalPlaces = function (num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

    if (!match)
        return 0;

    return Math.max(0,
        (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
};

var assertSameCurrency = function (left, right) {
    if (left.currency !== right.currency)
        throw new Error('Different currencies');
};

var assertType = function (other) {
    return true;
    // if (!(other instanceof Money))
    //     throw new TypeError('Instance of Money required');
};

var assertOperand = function (operand) {
    if (isNaN(parseFloat(operand)) && !isFinite(operand))
        throw new TypeError('Operand must be a number');
};

/**
 * Creates a new Money instance.
 * The created Money instances is a value object thus it is immutable.
 *
 * @param {Number} amount
 * @param {Object/String} currency
 * @returns {Money}
 * @constructor
 */
export class Money {
    amount: number
    currency: any
    
    constructor(amount, currency){
      if (isString(currency))
        currency = Money[currency];

      if (!isPlainObject(currency))
        throw new TypeError('Invalid currency');

      if (!isInt(amount))
        throw new TypeError('Amount must be an integer');

      this.amount = amount;
      this.currency = currency.code;
      Object.freeze(this);
    }

    static fromInteger = function (amount, currency) {
      if (isObject(amount)) {
        if (amount.amount === undefined || amount.currency === undefined) {
            throw new TypeError('Missing required parameters amount,currency');
        }

        currency = amount.currency;
        amount = amount.amount;
      }

      if (!isInt(amount)) {
          throw new TypeError('Amount must be an integer value');
      }

      return new Money(amount, currency);
    };

    static fromDecimal = function (amount, currency) {
      var multipliers = [1, 10, 100, 1000];

      if (isObject(amount)) {
          if (amount.amount === undefined || amount.currency === undefined)
              throw new TypeError('Missing required parameters amount,currency');

          currency = amount.currency;
          amount = amount.amount;
      }

      if (isString(currency))
          currency = Money[currency];

      if (!isPlainObject(currency))
          throw new TypeError('Invalid currency');

      var decimals = decimalPlaces(amount);

      if (decimals > currency.decimal_digits)
          throw new Error("The currency " + currency.code + " supports only "
              + currency.decimal_digits + " decimal digits");

      var integerAmount = amount * multipliers[currency.decimal_digits];
      return new Money(Math.round(integerAmount), currency);
  };

  /**
   * Returns the total value of all the amounts passed in
   *
   * @param {Array.Money} values
   * @returns {Money}
   */
  static sum = function (values) {
    return values.reduce(function(sum, value){
      return sum.add(value)
    }, new Money(0, Money.USD))
  }

  /**
   * Returns true if the two instances of Money are equal, false otherwise.
   *
   * @param {Money} other
   * @returns {Boolean}
   */
   equals = function (other) {
      var self = this;
      assertType(other);

      return self.amount === other.amount &&
              self.currency === other.currency;
  };

  /**
   * Adds the two objects together creating a new Money instance that holds the result of the operation.
   *
   * @param {Money} other
   * @returns {Money}
   */
   add = function (other) {
      var self = this;
      assertType(other);
      assertSameCurrency(self, other);

      return new Money(self.amount + other.amount, self.currency);
  };

  /**
   * Subtracts the two objects creating a new Money instance that holds the result of the operation.
   *
   * @param {Money} other
   * @returns {Money}
   */
   subtract = function (other) {
      var self = this;
      assertType(other);
      assertSameCurrency(self, other);

      return new Money(self.amount - other.amount, self.currency);
  };

  /**
   * Multiplies the object by the multiplier returning a new Money instance that holds the result of the operation.
   *
   * @param {Number} multiplier
   * @param {Function} [fn=Math.round]
   * @returns {Money}
   */
   multiply = function (multiplier: number, fn?) {
      if (!isFunction(fn))
          fn = Math.round;

      assertOperand(multiplier);
      var amount = fn(this.amount * multiplier);

      return new Money(amount, this.currency);
  };

  /**
   * Divides the object by the multiplier returning a new Money instance that holds the result of the operation.
   *
   * @param {Number} divisor
   * @param {Function} [fn=Math.round]
   * @returns {Money}
   */
   divide = function (divisor: number, fn?) {
      if (!isFunction(fn))
          fn = Math.round;

      assertOperand(divisor);
      var amount = fn(this.amount / divisor);

      return new Money(amount, this.currency);
  };

  /**
   * Allocates fund bases on the ratios provided returing an array of objects as a product of the allocation.
   *
   * @param {Array} other
   * @returns {Array.Money}
   */
   allocate = function (ratios) {
      var self = this;
      var remainder = self.amount;
      var results = [];
      var total = 0;

      ratios.forEach(function (ratio) {
          total += ratio;
      });

      ratios.forEach(function (ratio) {
          var share = Math.floor(self.amount * ratio / total)
          results.push(new Money(share, self.currency));
          remainder -= share;
      });

      for (var i = 0; remainder > 0; i++) {
          results[i] = new Money(results[i].amount + 1, results[i].currency);
          remainder--;
      }

      return results;
  };

  /**
   * Compares two instances of 
   *
   * @param {Money} other
   * @returns {Number}
   */
   compare = function (other) {
      var self = this;

      assertType(other);
      assertSameCurrency(self, other);

      if (self.amount === other.amount)
          return 0;

      return self.amount > other.amount ? 1 : -1;
  };

  /**
   * Checks whether the value represented by this object is greater than the other.
   *
   * @param {Money} other
   * @returns {boolean}
   */
   greaterThan = function (other) {
      return 1 === this.compare(other);
  };

  /**
   * Checks whether the value represented by this object is greater or equal to the other.
   *
   * @param {Money} other
   * @returns {boolean}
   */
   greaterThanOrEqual = function (other) {
      return 0 <= this.compare(other);
  };

  /**
   * Checks whether the value represented by this object is less than the other.
   *
   * @param {Money} other
   * @returns {boolean}
   */
   lessThan = function (other) {
      return -1 === this.compare(other);
  };

  /**
   * Checks whether the value represented by this object is less than or equal to the other.
   *
   * @param {Money} other
   * @returns {boolean}
   */
   lessThanOrEqual = function (other) {
      return 0 >= this.compare(other);
  };

  /**
   * Returns true if the amount is zero.
   *
   * @returns {boolean}
   */
   isZero = function () {
      return this.amount === 0;
  };

  /**
   * Returns true if the amount is positive.
   *
   * @returns {boolean}
   */
   isPositive = function () {
      return this.amount > 0;
  };

  /**
   * Returns true if the amount is negative.
   *
   * @returns {boolean}
   */
   isNegative = function () {
      return this.amount < 0;
  };

  /**
   * Returns the decimal value as a float.
   *
   * @returns {number}
   */
   toDecimal = function () {
      return Number(this.toString());
  };

  /**
   * Returns the decimal value as a string.
   *
   * @returns {string}
   */
   toString = function () {
      var currency = Money[this.currency];
      return (this.amount / Math.pow(10, currency.decimal_digits)).toFixed(currency.decimal_digits);
  };

  /**
   * Returns a serialised version of the instance.
   *
   * @returns {{amount: number, currency: string}}
   */
   toJSON = function () {
      return {
          amount: this.amount,
          currency: this.currency
      };
  };

  toFormattedString = function(){
      var currency = Money[this.currency];
      return `${currency['symbol_native']} ${this.toString()}`;
  }

  /**
   * Returns the absolute value of the amount in money form
   *
   * @returns {Money}
   */
   abs = function () {
    return new Money(Math.abs(this.amount), this.currency)
  }

  /**
   * Returns the amount represented by this object.
   *
   * @returns {number}
   */
   getAmount = function () {
      return this.amount;
  };

  /**
   * Returns the currency represented by this object.
   *
   * @returns {string}
   */
   getCurrency = function () {
      return this.currency;
  };

  static USD = {
      "symbol": "$",
      "name": "US Dollar",
      "symbol_native": "$",
      "decimal_digits": 2,
      "rounding": 0,
      "code": "USD",
      "name_plural": "US dollars"
  };
  
  static CAD = {
    "symbol": "CA$",
    "name": "Canadian Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CAD",
    "name_plural": "Canadian dollars"
  } 
  
  static EUR = {
    "symbol": "€",
    "name": "Euro",
    "symbol_native": "€",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "EUR",
    "name_plural": "euros"
  };
}