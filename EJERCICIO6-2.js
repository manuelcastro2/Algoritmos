var examen1 = parseInt(prompt("DIGITE EL EXAMEN N°1"));
var examen2 = parseInt(prompt("DIGITE EL EXAMEN N°2"));
var examen3 = parseInt(prompt("DIGITE EL EXAMEN N°3"));
var tarea1 = parseInt(prompt("DIGITE EL TRABAJO N°1"));;
var tarea2 = parseInt(prompt("DIGITE EL TRABAJO N°2"));;

if (!isNaN(examen1) && !isNaN(examen2) && !isNaN(examen3) && !isNaN(tarea1) && !isNaN(tarea2)) {
    if (examen1 >= 1 && examen1 <= 5 &&
        examen2 >= 1 && examen2 <= 5 &&
        examen3 >= 1 && examen3 <= 5 &&
        tarea1 >= 1 && tarea1 <= 5 &&
        tarea2 >= 1 && tarea2 <= 5) {
        var sumExamen = examen1 + examen2 + examen3;
        var sumTarea = tarea1 + tarea2;
        sumExamen = sumExamen / 3;
        sumTarea = sumTarea / 2;
        var TotalExamen = sumExamen * 0.6;
        var TotalTarea = sumTarea * 0.4;
        var notaFinal = TotalExamen + TotalTarea;
        console.log("EXAMEN 1: " + examen1);
        console.log("EXAMEN 2: " + examen2);
        console.log("EXAMEN 3: " + examen3);
        console.log("TRABAJO 1: " + tarea1);
        console.log("TRABAJO 2: " + tarea2);
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
    } else {
        console.log("LOS VALORES DE LA NOTA DEBEN SER ENTRE 0 A 5");
    }
} else {
    console.log("SOLO SE RESIVEN PARAMETROS NUMERICOS");
}
