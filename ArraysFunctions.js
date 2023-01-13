//Find index 
var numbers = [1,2,3,4,5,6,,7,8,9,10];

// var result = numbers.findIndex((currentValue,index, arr)=>{
//     return (currentValue >6);
// });
//console.log(result);

//Array Filter
// var filterArray = numbers.filter((currentValue,index, arr)=>{
//     return currentValue > 4;
// });

//console.log(filterArray);

//Array.prototype.slice()

//var sliceMethod = numbers.slice(1,3);

//console.log(sliceMethod);

//Array.prototype.splice()

//var spliceMethod = numbers.splice(1,2,10,12,19);
//console.log(numbers);
//console.log(spliceMethod);

//Array.prototype.Concat()

//var numbers2 = ['a','b','c'];
//var concatMethod =  numbers.concat(numbers2);
//console.log(concatMethod);

//Array.prototype.push()

// var result = numbers.push(55);
// console.log(numbers);
// console.log(result);

//Array.prototype.map()  /*Very important method for React.js */

var mapArray = [1,2,3,4,5,6];
mapArray.map(num)=>{
    return 2*num;
}
console.log(numbers);
