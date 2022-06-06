const getNumericalValueOfWord = (word) => {
  word.split('').reduce(
    (char, value) => value + char.charCodeAt(),
    0
  )
}

const binarySearchForRotation = (array, start, end) => {
  const mid = Math.floor(start + end) / 2;
  const word = array[mid];
  const nextWord = array[mid +1];
  const prevWord = array[mid - 1];

  // If we're at the start or end
  if (mid === 0 || mid === array.length - 1) return mid;

  if (word[0] < prevWord[0]) return mid;

  if (word[0] > prevWord[0]) {
    return binarySearchForRotation(array, mid, end);
  }

  if (word[0] === prevWord[0] && getNumericalValueOfWord(word) < getNumericalValueOfWord(nextWord)) {
    return binarySearchForRotation(array, start, mid);
  }

  if (word[0] === array[mid] && getNumericalValueOfWord(word) > getNumericalValueOfWord(nextWord)) {
    return binarySearchForRotation(array, mid, end);
  }
}

const findRotation = (array) => {
  return binarySearchForRotation(array, 0, array.length - 1);
}
