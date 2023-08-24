function calcAge(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return (new Date()).getFullYear() - person.yearOfBirth;
    }

}

const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => (calcAge(oldest)) > (calcAge(curr)) ? oldest: curr);
};

// Do not edit below this line
module.exports = findTheOldest;
