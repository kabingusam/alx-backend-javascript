/* Representation of the class HolbertonClass */

class HolbertonClass {
    constructor(size, location){
        this._size = size;
        this._location = location;
    }
    get size() {
        return this._size
    }
    set size(value){
        this._size = value
    }
    get location(){
        return this._location
    }
    set location(value){
        this._location = value
    }
    [Symbol.toPrimitive](hint){
        // When the class is cast into a Number, it should return the size
        if (hint == 'number'){
            return this.size
        }
        // When the class is cast into a String, it should return the location
        if (hint == 'String'){
            return this.location
        }
        return this
    }
}
