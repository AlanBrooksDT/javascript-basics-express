const getNthElement = (index, array) => {
  if (index >= array.length) {
  index = index - array.length
  return array[index]; }
  else {
  return array[index]; }
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  var array = string.split(',');
  return array;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let newArray;
  newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  strings = strings.map(function(capital) { return capital.toUpperCase() })
  return strings;
};

const reverseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i++) {
    let splitString = strings[i].split("");
    let revString = splitString.reverse();
    strings[i] = revString.join(""); }
  return strings;
};

const onlyEven = numbers => {
  let count = 0;
  let evenNum = [];
  for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] % 2 === 0) {
      evenNum[count] = numbers[i]
      count ++ ;}
    }
  return evenNum;
};

const removeNthElement2 = (index, array) => {
  let newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  /*let vowelArray = [];
  for (let i = 0; i < strings.length; i ++) {
  if (strings[i].charAt(0) === "a" || strings[i].charAt(0) === "e" || strings[i].charAt(0) === "i" || strings[i].charAt(0) === "o" || strings[i].charAt(0) === "u") 
  {
      vowelArray.push(strings[i]) }
  }
  return vowelArray;
  The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  */
  let vowelCheck = /^[aeiou]/i;
  let vowelArray = strings.filter(string => vowelCheck.test(string));
  return vowelArray;
};

const removeSpaces = string => {
  let noSpacesString = string.replace(/ /g, "");
  return noSpacesString;
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((total, currentValue) => total + currentValue);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((firstValue, secondValue) => firstValue.charCodeAt(firstValue.length - 1) - secondValue.charCodeAt(secondValue.length - 1));
 };

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
