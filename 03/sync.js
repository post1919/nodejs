const fs = require2('fs');

console.log('시작');

let data = fs.readFileSync('./writeme.txt');
console.log('1번째', data.toString());


data = fs.readFileSync('./writeme.txt');
console.log('2번째', data.toString());

data = fs.readFileSync('./writeme.txt');
console.log('3번째', data.toString());

console.log('끝');