/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function () {
    let memory = 0;
    let total = 0;
    let calculator = {};

    calculator.load = function (x) {
        // total = x;
        // return x;
        if (typeof x === 'number') {
            total = x;
            return x;
        }else{
            throw error;
        }

    }

    calculator.getTotal = function (x) {
        return total;

    }

    calculator.add = function (x) {
        // total += x;
        if (typeof x === 'number'){
            total += x;
        }else{
            throw error;
        }
    }

    calculator.subtract = function (x) {
        // total -= x;
        if (typeof x === 'number'){
            total -= x;
        }else{
            throw error;
        }
    }

    calculator.multiply = function (x) {
        // total *= x;
        if (typeof x === 'number'){
            total *= x;
        }else{
            throw error;
        }
    }

    calculator.divide = function (x) {
        // total /= x;
        if (typeof x === 'number'){
            total /= x;
        }else{
            throw error;
        }
    }

    calculator.recallMemory = function (x) {
        return memory;
    }

    calculator.saveMemory = function (x) {
        memory = total;
    }

    calculator.clearMemory = function (x) {
        memory = 0;
    }

    return calculator;

}

var newCalc = function () {
    return calculator;
}

/**
 * sets the `total` to the number passed in
 * @param  { Number } x
 * @return { Number }    current total
 */


/**
 * Return the value of `total`
 * @return { Number }
 */


/**
 * Sums the value passed in with `total`
 * @param { Number } x
 */


/**
 * Subtracts the value passed in from `total`
 * @param  { Number } x
 */


/**
 * Multiplies the value by `total`
 * @param  { Number } x
 */


/**
 * Divides the value passing in by `total`
 * @param  { Number } x
 */


/**
 * Return the value stored at `memory`
 * @return { Number }
 */


/**
 * Stores the value of `total` to `memory`
 */


/**
 * Clear the value stored at `memory`
 */

/**
 * Validation
 */

