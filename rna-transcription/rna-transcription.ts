class Transcriptor {
  toRna(dna: string) {
    let rna = '';
    for (const sequence of dna) {
      switch (sequence.toUpperCase()) {
        case 'G':
          rna += 'C';
          break;
        case 'C':
          rna += 'G';
          break;
        case 'T':
          rna += 'A';
          break;
        case 'A':
          rna += 'U';
          break;
        default:
          throw 'Invalid input DNA.';
      }
    }
    return rna;
  }
}

export default Transcriptor;
