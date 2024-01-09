const findTheOldest = (arr) =>
  arr.reduce(
    (obj, person) => {
      const yearOfDeath = person["yearOfDeath"]
        ? person.yearOfDeath
        : new Date().getFullYear();
      const age = yearOfDeath - person.yearOfBirth;
      return age > obj.max_age ? { personObj: person, max_age: age } : obj;
    },
    { personObj: {}, max_age: 0 }
  ).personObj;

// Do not edit below this line
module.exports = findTheOldest;
