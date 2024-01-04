import map, { filter } from './lib';

let numbers = [4, 3, 9, 11, 13, 44, 9];

let result = filter(numbers, e => e % 2 == 0);

result.forEach(no => console.log(no));

let doubled = map(numbers, e => e * 2);

doubled.forEach(no => console.log(no));

console.log("End!!!")