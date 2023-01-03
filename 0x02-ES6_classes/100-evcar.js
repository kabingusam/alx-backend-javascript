import Car from './10-car';
/* Representation of the car class */

class EVCar extends Car {
    constructor(brand, motor, color, range){
        this._brand = brand;
        this._motor = motor;
        this._color = color;
        this.range = range;
    }
}
