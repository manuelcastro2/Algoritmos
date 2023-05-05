var examen = [];
var trabajos = [];
var sumExamen = 0;
var sumTrabajos = 0;
console.log("NOTAS");
for (let index = 0; index < 3; index++) {
    examen[index] = parseFloat(prompt("DIGITE LA CALIFICACION DEL EXAMEN N°" + index));
    if (!isNaN(examen[index])) {
        if (1 >= examen[index] && examen[index] <= 5) {
            console.log("NOTA EXAMEN N°" + index + ": " + examen[index]);
            sumExamen = sumExamen + examen[index];
        } else {
            console.log("LA NOTA DIGITADA ESTA FUERA DE RANGO, la nota maxima y minima es 1.0 a 5.0");
        }
    } else {
        console.log("NO SE RESIVEN PARAMENTROS VACIOS O ALFABETICOS");
        index--;
    }
}
var TsumExamen = sumExamen / 3;
TsumExamen = TsumExamen * 0.6;
for (let index = 0; index < 2; index++) {
    trabajos[index] = parseFloat(prompt("DIGITE LA CALIFICACION DEL TRABAJO N°" + index));
    if (!isNaN(trabajos[index])) {
        if (1 >= trabajos[index] && trabajos[index] <= 5) {
            console.log("NOTA TRABAJO N°" + index + ": " + trabajos[index]);
            sumTrabajos = sumTrabajos + trabajos[index];
        } else {
            console.log("LA NOTA DIGITADA ESTA FUERA DE RANGO, la nota maxima y minima es 1.0 a 5.0");
        }
    } else {
        console.log("NO SE RESIVEN PARAMENTROS VACIOS O ALFABETICOS");
        index--;
    }
}
var TsumTrabajos = sumTrabajos / 2;
TsumTrabajos = TsumTrabajos * 0.4;
var notaFinal = TsumExamen + TsumTrabajos;
console.log("NOTA FINAL: " + notaFinal);
if (notaFinal == 5) {
    console.log("NOTA  PERFECTA");
} else if (notaFinal < 5 && notaFinal >= 4) {
    console.log("NOTA SOBRESALIENTE");
} else if (notaFinal < 4 && notaFinal >= 3) {
    console.log("NOTA BASICA");
} else if (notaFinal < 3 && notaFinal >= 2) {
    console.log("NOTA MALA");
} else {
    console.log("TOCA LLAMAR ACUDIENTE, YA PERDIO EL AÑO");
}