export default function getListStudentIds(){
    if(!Array.isArray(students)) {
        return []
    }
    return students.map(student => student.id)
}
