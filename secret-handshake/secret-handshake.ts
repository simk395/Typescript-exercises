export default class HandShake {
    number: number;
    constructor(number: number) {
        this.number = number;
    }

    commands() {
        const handshake: string[] = [];
        if (this.number & 1) handshake.push('wink');
        if (this.number & 2) handshake.push('double blink');
        if (this.number & 4) handshake.push('close your eyes');
        if (this.number & 8) handshake.push('jump');
        if (this.number & 16) handshake.reverse();
        return handshake;
    }
}