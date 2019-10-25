export default class GradeSchool {
    readonly _roster = new Map();
    constructor() {

    }

    studentRoster() {
        return this._roster;
    }

    addStudent(student: string, grade: number) {
        const studentGrade = grade.toString()
        this._roster.set(studentGrade, [...this._roster.get(studentGrade), student])
        return student + "added!"
    }

    studentsInGrade(grade: number) {
        let num = grade
        return [];
    }
}