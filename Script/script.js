// let a = [1,2,3];
// let b =[5,4,6,8];

// let c = [...a,...b];
// console.log(c);

// let obj = {
//     name : "hari",
//     age : "099"
// };
// let ob = {
//     name : "hiju",
//     age : "0984"
// };
// // let t = obj.concat(ob);
// let r = a.concat(b)
// console.log(r);

// let [ab ,bc] = [10,11]
// console.log(ab)
// console.log(bc+ab)


// class Calculator{
//     constructor(a,b){
//         this.num1 = a;
//         this.num2 = b;
//     }
//     sum(){
//         console.log(this.num1+this.num2)
//     }
// }
// var obj = new Calculator();
// obj.sum();



// "use strict"
// var person = {
//     name : "jony",
//     data : {
//         nam : "mike",
//         getName : function(){
//             return(this.name);
//         }
//     }
// }

// var x = person.data.getName.bind(person)
// console.log(x())



function hello(){
var result = 0
for (var index = 0; index < arguments.length; index++) {
    result+= arguments[index];
    
}
return(result)
}
var xx = hello.call(null,1,2,3,1,2,3,4)
console.log(xx)

