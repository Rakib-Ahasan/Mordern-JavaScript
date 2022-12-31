/*function numbers()
{
    return 10;
}

let numbers2=()=>{
    return 100;
}

let num = (n)=>  111;

console.log(numbers());
console.log(numbers2());
console.log(num());*/

// this keyword use in arrow function

var javascript = {
    name: "JavaScript",
    libraries: ["React", "Java", "C#"],
    printLibraries: function(){
        this.libraries.forEach((a) =>{
            console.log(`${this.name} loves ${a}`);
            
        });
    },
};
javascript.printLibraries();