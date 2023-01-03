/*  Represents class HolbertonCourse
*/

class HolbertonCourse {
    /* parameters used in the class :
    name, length, students - conatined in the constructor
    */
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }
    /*
    Getters are functions used to read properties
    The get name is used to read the name property
    */
    get name() {
        return this._name;
    }
    /*
    Setter functions is used to update properties
    The set name is used
    */
    set name(value) {
        if (typeof value !== String)
            throw Error('name must be a string');

        this.name = value;
    }

    /*
    The get length is used to read the length property
   */
    get length() {
        return this._length;
    }
    /*
    The set name is used to update the length property
    */
    set length(value) {
        if (typeof value !== Number)
            throw Error('length must be a number');
        this.length = value;
    }

    /*
    The get students is used to read the array on students
    */
    get students() {
        return this._students;
    }
    /*
    The set students
    */
    set students(value) {
        if (!Array.isArray(this.students)) {
            throw Error('students must be an array');
        }
        if (!value.every(student => typeof student === 'string')) {
            throw Error('students must be an array of strings');
        }
        this._students = value
    }
}
