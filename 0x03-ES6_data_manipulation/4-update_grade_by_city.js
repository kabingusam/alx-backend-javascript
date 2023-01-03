export default function updateStudentGradeByCity(students, city, newGrades) {
    const defaultGrade = { grade: 'N/A' };

    if (!Array.isArray(students)) {
        return students
            .filter((student) => student.location === city)
            .map((student) => ({
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade: (newGrades
                    .filter((grade) => grade.studentId === student.id)
                    .pop() || defaultGrade).grade,
            }));
    }
    return [];
}
