var numero = parseInt(prompt("DIGITE UN NUMERO"));
if (!isNaN(numero)) {

    switch (numero) {
        case 1:
console.log(numero+"= uno");
            break;
        case 3:
            console.log(numero+"= tres");
            break;
        case 5:
            console.log(numero+"= cinco");
            break;
        case 7:
            console.log(numero+"= siete");
            break;
        case 9:
            console.log(numero+"= nueve");
            break;
        case 2:
            console.log(numero+"= dos");
            break;
        case 4:
            console.log(numero+"= cuatro");
            break;
        case 6:
            console.log(numero+"= seis");
        break;
        case 8:
            console.log(numero+"= ocho");
        break;
        case 10:
            console.log(numero+"= dies");
            break
        default:
            console.log("¡¡¡ERROR!!!");
            break;
    }

} else {
    console.log("LOS VALORES DIGITADOS DEBEN SER NUMERICOS");
}