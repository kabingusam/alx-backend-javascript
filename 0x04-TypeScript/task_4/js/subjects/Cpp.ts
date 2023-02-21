class Cpp extends Subject {
    getRequirements() {
        return "Here is the list of requirements for Cpp"
    }
    getAvailableTeacher() {
        return `Available Teacher: ${this.teacher.firstName}`;
    }
    if(experienceTeachingC: number) {
        this.getAvailableTeacher();
    }
}