// primera guia como buscar un elmento en un arreglo

let arreglo = [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ];
let arreglo2 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
console.log(arreglo2[2][0][0][0][0]);

// como cambiar el valor de un elmento y eliminar elementos on el splice

let arreglo3 =  [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
arreglo3[1][1] = "?";
arreglo3[3][1] = "9";
arreglo3[0][0] = "¡";
arreglo3[0].splice(2,1);
arreglo3[3].splice(2,1);
console.log(arreglo3);

let array = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

// recorrido de arreglos con ciclo for

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }   
}
// recorrido de arreglos con el metodo .forEach
array.forEach(i => {
    i.forEach(j => {
        console.log(j);  
    })
});

// ejercicio de recorrido de arreglos con for y metodo forEach

let array2 = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
66, 77], [1, 2, 3, 4] ] ];

for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; j++) {
        for (let c = 0; c < array2[i][j].length; c++) {
            console.log(array2[i][j][c]);
        }
    }  
}

array2.forEach(i => {
    i.forEach(j => {
        j.forEach(c => {
            console.log(c);
        })
    })
})

// suma de elementos con .forEach y validacion de positivo o negativo con .forEach.

let array3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
let suma = 0;

array3.forEach(i =>{
    i.forEach(j =>{
        if (j%2 != 0) {
            console.log(j);
        }
    })
});


array3.forEach(i =>{
    i.forEach(j =>{
        suma += j;
    })
});

console.log(suma);

