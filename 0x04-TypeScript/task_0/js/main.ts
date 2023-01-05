interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const Student1: Student = {
    firstName: "sam",
    lastName: "kabi",
    age: 22,
    location: "Nairobi",
};

const Student2: Student = {
    firstName: "kobi",
    lastName: "bray",
    age: 23,
    location: "Kisumu",
};

const studentsList: Student[] = [Student1, Student2];

const table =  document.createElement("table");

studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationcell = row.insertCell();
    locationcell.innerHTML = student.location
});
