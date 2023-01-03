import Currency from './3-currency';
/* a representation of the class Pricing
*/

class Pricing {
    /* The parameters used in the class:
    amount : Number
    currency : Currency
    Both are intilialzed in the constructor
    */
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /* Get method 
    The attributes in the get method are stored as underscore attributes
    */
    get amount() {
        return this._amount;
    }
    /* The set method */
    set amount(value) {
        if (typeof value != Number) {
            throw new TypeError('amount must be a number');
        }
        this.amount = value;
    }

    /* Get method for the currency */
    get currency() {
        return this._currency;
    }
    /* The set method */
    set currency(value) {
        if (typeof value != currency) {
            throw new TypeError('value must be a currency');
        }
        this.currency = value;
    }
    /* returns the attributes in the following format 
    amount currency_name (currency_code) */
    displayFullPrice() {
        return `${this.amount} ${this.currency.name} (${this.currency.code})`

    }
    /* static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). 
    The function should return the amount multiplied by the conversion rate */
    static convertPrice(amount, conversionRate) {
        if (amount !== 'number'){
            throw new TypeError('Value of amount must be a number')
        }
        if (conversionRate !== 'number'){
            throw new TypeError('Value of the conversionRate must be a number')
        }
        return amount * conversionRate;
    }
}
