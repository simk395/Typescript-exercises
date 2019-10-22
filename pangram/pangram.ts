class Pangram {
  constructor(readonly text: string) {}
  isPangram = () =>
    new Set(this.text.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}

export default Pangram;
