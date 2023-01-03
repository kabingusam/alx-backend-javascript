/* Representation of the class Car */

class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    get brand(){
        return this._brand
    }
    set brand(value){
        this._brand = value
    }
    get motor(){
        return this._motor
    }
    set motor(value){
        this._motor = value
    }
    get color(){
        return this._color
    }
    set color(value){
        this._color = value
    }
    // This method should return a new object of the class
    cloneCar(){
        const species = this.constructor[Symbol.species]

        return new species();
    }
}
