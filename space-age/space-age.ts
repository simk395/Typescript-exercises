class SpaceAge {
  seconds: number;
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  age(seconds: number) {
    return this.seconds / (31557600 * seconds);
  }

  roundToDecimal(age: number) {
    return Math.round(age * 100) / 100;
  }

  onEarth() {
    const age = this.age(1);
    return this.roundToDecimal(age);
  }
  onMercury() {
    const age = this.age(0.2408467);
    return this.roundToDecimal(age);
  }
  onVenus() {
    const age = this.age(0.61519726);
    return this.roundToDecimal(age);
  }
  onMars() {
    const age = this.age(1.8808158);
    return this.roundToDecimal(age);
  }
  onJupiter() {
    const age = this.age(11.862615);
    return this.roundToDecimal(age);
  }
  onSaturn() {
    const age = this.age(29.447498);
    return this.roundToDecimal(age);
  }
  onUranus() {
    const age = this.age(84.016846);
    return this.roundToDecimal(age);
  }
  onNeptune() {
    const age = this.age(164.79132);
    return this.roundToDecimal(age);
  }
}

export default SpaceAge;
