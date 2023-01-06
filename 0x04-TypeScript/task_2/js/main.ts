interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak?(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks?(): string;
};

type subjects = "Maths | History";

class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home"
    }
    getToWork(){
        return "Getting a coffee break"
    }
    workDirectorTasks() {
        return "Getting to director tasks"
    }
};

class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home"
    }
    getCoffeeBreak() {
        return "Cannot have a break"
    }
    workTeacherTasks() {
        return "Getting to work"
    }
};

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork (employee: Director | Teacher) {
    if (isDirector(employee)){
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

function teachClass(todayClass: string) {
    if(todayClass == "Maths"){
        return "Teaching Math"
    } else {
        return "Teaching History"
    }
}
