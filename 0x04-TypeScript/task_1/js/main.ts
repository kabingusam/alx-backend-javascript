//Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

// Director interface
export interface Directors extends Teacher {
    numberOfReports: number;
};

// printTeacher interface 
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

// Student interface
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// printTeacher function
const printTeacher: printTeacherFunction = (firstname: string, lastName: string): string => {
    return `${firstname[0]}. ${lastName}`
};

function createTeacher(options: Teacher): Teacher {
    const teacher : Teacher = {
        firstName: options.firstName,
        lastName: options.lastName,
        fullTimeEmployee: options.fullTimeEmployee,
        yearsOfExperience: options.yearsOfExperience,
        location: options.location,
    };

    if(options.yearsOfExperience) {
        teacher.yearsOfExperience = options.yearsOfExperience;
    }

    for(const key in options){
        if(!teacher.hasOwnProperty(key)){
            teacher[key] = options[key]
        }
    }
    return teacher;
};

// Directors
function createDirector(options: Directors): Directors {
    const directors: Directors = createTeacher(options) as Directors;
    directors.numberOfReports =  options.numberOfReports;
    return directors;
};

// Students class
class StudentClass implements StudentClass{
    constructor(public firstname: string,public lastname: string) {
        firstname;
        lastname;
    }
    workOnHomework(): string {
        return 'Currently working'
    }
    displayName(): string {
        return this.firstname;
    }
};
