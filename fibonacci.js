function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence;
}

function numberToAscii(num) {
  // Convert number to ASCII character, wrapping around if needed
  return String.fromCharCode(33 + (num % 94)); 
}

function sequenceToAsciiArt(sequence) {
  return sequence.map(numberToAscii).join('');
}

const fibSequence = fibonacci(20);
console.log("Fibonacci sequence:", fibSequence);
console.log("ASCII:", sequenceToAsciiArt(fibSequence));