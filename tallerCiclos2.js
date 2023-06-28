// recorrer arreglos he imprimirla

let array = ["x", "y", "z", 0, 1, 2, 3];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// recorrer arreglo y sumarle uno

let array2 = [1, 17, 8, 9, 3]

for (let i = 0; i < array2.length; i++) {
    const element = array2[i]+1;
    console.log(element);
}

// recorrer arreglo funcion y reornar su longuitud

function longitud(arreglo) {
    return arreglo.length;
}
console.log(longitud(array));

// ingresar letra con funsion y retornar si se encuntra en el arreglo la letra

function ValidarArreglo(letra) {
    let array = ["a", "b", "c", "d", "e", "f", "g"];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === letra) {
            return "la letra ingresada si se encuentra en el arreglo";
        }  
    }
    return "la letra ingresada no se encuentra en el arreglo";
}
let letra = prompt("ingrese una letra del abecedario");
console.log(ValidarArreglo(letra));


