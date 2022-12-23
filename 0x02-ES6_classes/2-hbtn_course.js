/*  Represents class HolbertonCourse
*/
class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name(){
        return this._name;
    }
    set name(value){
        if (typeof value !== String) {
            throw new TypeError('name must be a string');
        }
        this._name = value;
    }

    get length(){
        return this._length;
    }
    set length(value){
        if (typeof value !== Number) {
            throw new  TypeError('length must be a number');
        }
        this._length = value;
    }

    get students(){
        return this._students;
    }
    set students(value){
        if (!Array.isArray(value)) {
            throw new TypeError('students must be an array');
        }
        if (!value.every(student => typeof student === 'string')) {
            throw new TypeError('students must be an array of strings')
        }
        this._students = value;
    }
}
