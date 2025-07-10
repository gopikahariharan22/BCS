const person = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 35, city: 'Chicago' },
    { name: 'Sara', age: 28, city: 'Miami' }    
];

const person1 = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 35, city: 'Chicago' },
];

// Loop through all persons and log all names
person.map((person) => console.log(person.name));

const allName = person.map(p => p.name);
console.log(allName)

const allname1 = person.find(p => p.age);
console.log(allname1);








