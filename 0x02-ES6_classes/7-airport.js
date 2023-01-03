/* Repersentaion of the Airport class */

class Airport {
    constructor(name, code){
        this.name = name;
        this._code = code;
    }
    /* getter method for name */
    get name(){
        return this._name
    }
    /* setter method for name */
    set name(value){
        this._name = value
    }
    /* getter method for code */
    get code(){
        return this._code
    }
    /* setter method for the code */
    set code(value){
        this._code = value
    }
    get [Symbol.toStringTag](){
        return this._code
    }
}
// default string description of the class should return the airport code
return `${this.name} (${this.code})`
