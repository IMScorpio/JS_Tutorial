const myArr = ['A', 'B', 'C', 'D', 'E', 'F'];
const myArr2 = ['A', 'B', 'C', 'D'];
const newArr = myArr2.concat(myArr);
console.log(newArr);
console.log(myArr.length);
console.log(myArr.join());
console.log(myArr.push('G'));
console.log(myArr.slice(0, 1));
console.log(myArr.pop());
console.log(myArr.reverse());
console.log(myArr.shift());
console.log(myArr.split(', '));

myArr.forEach((item, index) => {
  console.log(item, index);
});
