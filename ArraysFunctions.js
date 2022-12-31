//Find index 
var numbers = [1,2,3,4,5,6,,7,8,9,10];

var result = numbers.findIndex((currentValue,index, arr)=>{
    return (currentValue >6);
});
//console.log(result);

//Array Filter
var filterArray = numbers.filter((currentValue,index, arr)=>{
    return currentValue > 4;
});

//console.log(filterArray);

//Array.prototype.slice()

var sliceMethod = numbers.slice(1,3);

console.log(sliceMethod);
