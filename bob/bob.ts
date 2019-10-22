class Bob {
  hey(sentence: string) {
    sentence = sentence.trim();
    let shout = sentence.toUpperCase();
    let hasLetters = sentence.search(/[a-z]/i);
    if (!sentence) return 'Fine. Be that way!';
    if (
      sentence === shout &&
      sentence[sentence.length - 1] === '?' &&
      hasLetters !== -1
    )
      return "Calm down, I know what I'm doing!";
    if (sentence[sentence.length - 1] === '?') return 'Sure.';
    if (sentence === shout && hasLetters !== -1) return 'Whoa, chill out!';

    return 'Whatever.';
  }
}

export default Bob;
