const person = {
    name: 'sodor uddin',
    age: 25,
    proffession: 'developer',
    salary: 2500,
    married: true
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 27;
person['fav places']= ['maldives', 'bali','pataya']
console.log(person)
//
const propName = 'profession';
person[propName] = 'devops'
console.log(person)

//
const keyName = 'profession';
console.log(person[keyName])