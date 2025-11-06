const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = people.reduce((accumulator, currentPerson) => {
        if (currentPerson.yearOfDeath !== undefined && accumulator.yearOfDeath !== undefined) 
        {
            return ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) ? currentPerson : accumulator;
        } else if (currentPerson.yearOfDeath === undefined && accumulator.yearOfDeath === undefined)
        {
            return ((currentYear - currentPerson.yearOfBirth) > (currentYear - accumulator.yearOfBirth)) ? currentPerson : accumulator;
        } else if (currentPerson.yearOfDeath === undefined && accumulator.yearOfDeath !== undefined)
        {
            return ((currentYear - currentPerson.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) ? currentPerson : accumulator;
        } else if (currentPerson.yearOfDeath !== undefined && accumulator.yearOfDeath === undefined)
        {
            return ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (currentYear - accumulator.yearOfBirth)) ? currentPerson : accumulator;
        }
        }, people[0]);
    return oldestPerson;
};
console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
