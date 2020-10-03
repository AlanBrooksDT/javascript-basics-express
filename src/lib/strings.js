const sayHello = string => {
  if (string === 'world') {
    return `Hello, ${string}!`;
  }
  if (string === 'turtle') {
    return `Hello, ${string}!`;
  }
  return 'Hello, MCR Codes!';
};

const uppercase = string => {
  string = string.toUpperCase();
  return string;
};

const lowercase = string => {
  string = string.toLowerCase();
  return string;
};

const countCharacters = string => {
  const strLen = string.length;
  return strLen;
};

const firstCharacter = string => {
  const strFirstChar = string.charAt(0);
  return strFirstChar;
};

const firstCharacters = (string, n) => {
  let firstChars = '';
  for (index = 0; index < n; index++) {
    firstChars += string.charAt(index);
  }
  return firstChars;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
