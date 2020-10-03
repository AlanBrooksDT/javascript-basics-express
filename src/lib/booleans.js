const negate = a => {
  return !a
};

const both = (a, b) => {
  if (a === true && b == true) {
  return true;}
  else {
  return false}
};

const either = (a, b) => {
  if (a === true || b == true) {
  return true;}
  else {
  return false}
};

const none = (a, b) => {
  if (a === false && b == false) {
  return true;}
  else {
  return false}
};

const one = (a, b) => {
  if (a === true && b == true) {
  return false;}
  else if (a === true || b === true){
  return true}
  else {
  return false}
};

const truthiness = a => {
  return a ? true : false
};

const isEqual = (a, b) => {
  if (a===b) {
  return true }
  else{
  return false }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
  return true }
  else{
  return false }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
  return true }
  else{
  return false }
};

const isOdd = a => {
  if ((a % 2) !== 0) {
  return true }
  else {
  return false } 
};

const isEven = a => {
  if ((a % 2) === 0) {
  return true }
  else {
  return false } 
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
  return true }
  else{
  return false }
};

const startsWith = (char, string) => {
  return string.startsWith(char) ? true : false  
};

const containsVowels = string => {
  let vowelCheck = false;
  let stringCase = string.toLowerCase();
  for (let index = 0; index < string.length; index ++) {
  	if (stringCase.charAt(index) === "a" || stringCase.charAt(index) === "e" || stringCase.charAt(index) === "i" || stringCase.charAt(index) === "o" || stringCase.charAt(index) === "u") {
  	vowelCheck = true;
  	break; 
  	}
  	}
  return vowelCheck;	
};

const isLowerCase = string => {
  let stringCase = string.toLowerCase();
  if (stringCase === string) {
  return true }
  else {
  return false }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
