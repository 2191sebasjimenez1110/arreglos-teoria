function arreglo(mensaje) {
    let array = [];
    let bandera;
    do {
        array = prompt("ingrese")
        bandera = prompt("ingrese S/N si quiere seguir ingresando elementos al array")
    } while (bandera != "S");
    console.log(array);
}