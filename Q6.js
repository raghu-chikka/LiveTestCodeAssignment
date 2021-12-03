const num = 32243;

const ReverseString = str => [...str].reverse().join('');

console.log(ReverseString(JSON.stringify(num)))