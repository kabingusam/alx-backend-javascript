export default function getStudentIdsSum(students) {
    return students.reduce((total, student) => total + student.id, 0);
}
