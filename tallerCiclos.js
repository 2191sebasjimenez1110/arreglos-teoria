// ejercicio 1 .length

let a = [1,2,3,4,5,6,7,8,9,10];
let b = [];
let c = ["a", true, -1];
let d = [2, 4, 5, 7, 1, 34, 89, 0];

console.log("la cantiad de elementos que contiene el arreglo son : " + a.length);
console.log("la cantiad de elementos que contiene el arreglo son : " + b.length);
console.log("la cantiad de elementos que contiene el arreglo son : " + c.length);
console.log("la cantiad de elementos que contiene el arreglo son : " + d.length);

// ejercicio 2 .push

let array = [1,2,3,4,5,6,7,8,9,10];

array.push(345);
array.push(true);

console.log(array);

array.push("ADSO");
array.push(455,78,false);

console.log(array);

array.push("ABcd",true,21);
console.log(array);

/* ejercicio 3 . splice */

let a3 = [1, 2, false];
let b3 = [99, false, 17, 45, 7, "abc", 78]; 
let c3 =  [-1, -55, -89- 30, 1000]; 
let d3 = ["zxc", 767, 1298, true, false, [3], 1] ;

a3.splice(2, 1);
b3.splice(2, 1);
c3.splice(1,1);
d3.splice(1, 4);

console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);

// ejercicio 4

let array3 = [2, 6, 9, 0, 5];
let array3Copy = array3;

// copia no dependiente con slice

console.log(array3Copy);

let array4 = ["abc", 4, 88, 99];
let array4Copy = array4.slice()
console.log(array4Copy);

array4.push(45);

console.log(array4);



