/* Represenation of the Currency class
*/

class Currency {
    /*Parameters to be used in the class:
    class and name : both defined in the constructor
    */
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    /*
    The get function used -> code
    get: function(){}
    The attributes are stored in an underscore attribute
    */
    get code() {
        return this._code;
    }
    /*
    The set function used -> code
    set: function(value) {}
    */
    set code(value) {
        if (typeof value != String) {
            throw Error('code must be a string');
        }
        this.code = value;
    }

    /*The get function used -> name
    */
    get name() {
        return this._name;
    }
    /* The set function used -> name
     */
    set name(value) {
        if (typeof value != String) {
            throw Error('name must be a string');
        }
        this.name = value;
    }

    /* method that returns the attributes in the format name (code).
     */
    displayFullCurrency(){
        return `${this.name}(${this.code})`
    }
}
