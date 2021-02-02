//finding sum of array with forloop
function simpleArraySum(ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
      count += ar[i];
    }
    return count;
}

simpleArraySum([1,2,3,4,5,6])

//using reduce method
// a = accumulator, c = currentValue
// a = 0, c = 1 => 1
// a = 1, c = 2 => 3
// a = 3, c = 3 => 6
// a = 6, c = 4 => 10


const numbers = [1,2,3,4]

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

sum

const people = [
    { id: '1', name: 'Gabriel', age: 31 },
    { id: '2', name: 'Jacob', age: 52 },
    { id: '3', name: 'Jeffrey', age: 40 },
];
let result;

// count

result = people.reduce((acc, person) => acc + 1, 0);

//sum ages

result = people.reduce((acc, person) => acc + person.age, 0)

// array of names (map)

result = people.reduce((acc, person) => [...acc, person.name], []);

//convert id => person dictionary

result = people.reduce((acc, person) => {
    return {...acc, [person.id]: person};
},{});

console.log(result['3'])

//max age

result = people.reduce((acc, person) => {
    if (acc === null || person.age > acc) return person.age
    return acc;
}, null);

// min age

result = people.reduce((acc, person) => {
    if (acc === null || person.age < acc) return person.age
    return acc;
}, null);

//find by name not the most effective way, use .find

result = people.reduce((acc, person) => {
    if (acc !== null) return acc;
    if (person.name === 'Gabriel') return person;
    return null;
}, null);

// all over 18

result = people.reduce((acc, person) => {
    if (!acc) return false;
    return person.age > 18
}, true)

// any over 18

result = people.reduce((acc, person) => {
    if(acc) return true;
    return person.age > 30
}, false)

//count occurences

const orders = [
    { id: '1', status: 'pending'},
    { id: '2', status: 'delivered'},
    { id: '3', status: 'pending'},
    { id: '4', status: 'cancelled'}
];

result = orders.reduce((acc, order) => {
    return {...acc, [order.status]: (acc[order.status] || 0) + 1};
},{});

//flatten array

const folders = [
    "index.js",
    ['flatten.js', 'map.js'],
    ['any.js', ['all.js', 'count.js']]
];

function flatten(acc, item) {
    console.log(acc, item);
if(Array.isArray(item)) {
    return [...acc, ...item.reduce(flatten, [])]
}
return [...acc, item]
}

result = folders.reduce(flatten, [])

// create reduce ourselves

function reduce(array, callback, init) {
    let acc = init;
    for(let i = 0; i < array.length; i++){
        acc = callback(acc, array[i], i, array);
    }
    return acc;
}

result = reduce([1,2,3], (acc, num) => acc + num, 0)