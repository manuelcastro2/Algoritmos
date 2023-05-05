var dia = parseInt(prompt("DIIGITE EL MES QUE QUIERE VISUALIZAR"));

if (isNaN(dia)) {
    console.log("NO SE RESIVEN VALORES VACIOS");
    console.log("Y NO VALORES ALFABETICOS");
} else {
    switch (dia) {
        case 1:
            console.log("enero");
            break;
        case 2:
            console.log("febrero");
            break;
        case 3:
            console.log("marzo");
            break;
        case 4:
            console.log("abril");
            break;
        case 5:
            console.log("mayo");
            break;
        case 6:
            console.log("junio");
            break;
        case 7:
            console.log("julio");
            break;
        case 8:
            console.log("agosto");
            break;
        case 9:
            console.log("septiembre");
            break;
        case 10:
            console.log("octubre");
            break;
        case 11:
            console.log("noviembre");
            break;
        case 12:
            console.log("diciembre");
            break;
        default:
            console.log("seleccion de mes inadecuado");
            break;
    }
}


var dia = parseInt(prompt("DIIGITE EL MES QUE QUIERE VISUALIZAR"));

if (isNaN(dia)) {
    console.log("NO SE RESIVEN VALORES VACIOS");
    console.log("Y NO SE RESIVEN VALORES ALFABETICOS");
} else {
    if (dia == 1) {
        console.log("enero");
    } else if (dia == 2) {
        console.log("febrero");
    } else if (dia == 3) {
        console.log("marzo");
    } else if (dia == 4) {
        console.log("abril");
    } else if (dia == 5) {
        console.log("mayo");
    } else if (dia == 6) {
        console.log("junio");
    } else if (dia == 7) {
        console.log("julio");
    } else if (dia == 8) {
        console.log("agosto");
    } else if (dia == 9) {
        console.log("septiembre");
    } else if (dia == 10) {
        console.log("octubre");
    } else if (dia == 11) {
        console.log("noviembre");
    } else if (dia == 12) {
        console.log("diciembre");
    } else {
        console.log("seleccion de mes inadecuado");
    }
} 