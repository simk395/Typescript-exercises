export default class GradeSchool {
    private _roster: { [key: number]: Array<string> } = {}

    studentRoster() {
        const copy = Object.assign({}, this._roster)
        for (const key in copy) {
            copy[key] = this.studentsInGrade(+key)
        }
        return new Map(Object.entries(copy));
    }

    addStudent(student: string, grade: number): void {
        if (!this._roster[grade]) this._roster[grade] = [student]
        else this._roster[grade] = [...this._roster[grade], student]
    }

    studentsInGrade(grade: number): string[] {
        return [...(this._roster[grade] || [])].sort();
    }
}
