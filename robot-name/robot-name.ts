class RobotName {
    name: string;
    private _names: Set<string> = new Set()
    constructor() {
        this.name = this.getName()
    }
    private getRandomChar(): string {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26))
    }

    private getRandomNumbers(): string {
        return Math.random().toString(10).slice(2, 5)
    }

    createName(): string {
        const chars: string = this.getRandomChar() + this.getRandomChar();
        const numbers: string = this.getRandomNumbers();
        return chars + numbers
    }

    getName(): string {
        let name = this.createName();
        while (this._names.has(name)) {
            name = this.createName()
        }
        this._names.add(name)
        return name
    }

    resetName(): string {
        return this.name = this.getName();
    }
}

export default RobotName