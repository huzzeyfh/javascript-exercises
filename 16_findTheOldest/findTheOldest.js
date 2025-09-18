const addDate = new Date();
const propertyToCheck = 'yearOfDeath';

function findTheOldest(arr) {
    arr.forEach(obj => {
        if (!Object.hasOwn(obj, propertyToCheck)) {
           obj.yearOfDeath = addDate.getFullYear();
        }
    });

    const peopleAge = arr.map(({
        name, yearOfBirth, yearOfDeath
    }) => ({
        name: name, age: yearOfDeath - yearOfBirth
    }));


    const filterAge = peopleAge.sort((a, b) => a.age - b.age);

    return filterAge[filterAge.length - 1];
}

// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
