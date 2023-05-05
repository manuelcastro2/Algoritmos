var numero = parseInt(prompt("DIGITE UN NUMERO"));
if (!isNaN(numero)) {

    switch (numero) {
        case 1: case 3: case 5: case 7: case 9:
            console.log("IMPAR");
            break;
        case 2: case 4: case 6: case 8: case 10:
console.log("PAR");
            break
        default:
            console.log("LOS VALORES COMPRENDIDOS DEBEN ESTAR EN UN RANGO DEL 1 AL 10");
            break;
    }

} else {
    console.log("LOS VALORES DIGITADOS DEBEN SER NUMERICOS");
}