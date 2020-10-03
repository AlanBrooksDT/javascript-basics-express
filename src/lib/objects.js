const createPerson = (name, age) => {
  return {
    name: name, 
    age: age,
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true; }
  else {
    return false; }
};

const isOver65 = person => {
  if (person.age > 65) {
  return true; } 
  else {
  return false; }
};

const getAges = people => {
  const allAges = people.map(person => person.age);
  return allAges;
};

const findByName = (name, people) => people.find(obj => obj.name === name);

const findHondas = cars => {
  const result = cars.filter(obj => {
    return obj.manufacturer === "Honda";})
  return result; 
};

const averageAge = people => {
  const numOfPeople = people.length;
  const arrayOfAges = people.map(person => person.age);
  const sumOfAges = arrayOfAges.reduce((total, currentValue) => total + currentValue);
  const averageOfAges = sumOfAges / numOfPeople;
  return averageOfAges;  
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
