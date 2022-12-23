class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof(name) != String){
            throw console.error('not string');
        }
        if (typeof(length) != Number){
            throw console.error('not number');
        }
        if (typeof(students != Array)){
            throw console.error('not array');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
}
