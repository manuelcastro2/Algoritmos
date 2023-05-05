console.log("AEROPUERTO");
var diasESTADIA = parseInt(prompt("DIGITE LOS DIAS DE ESTADIA"));
var Distancia = parseInt(prompt("DIGITE LA DISTANCIA QUE TIENE EL VUELO (KM)"));
var descuento = 0.3;

if (!isNaN(diasESTADIA) && !isNaN(Distancia)) {
    if (diasESTADIA >= 7 && Distancia >= 800) {
        console.log("PRECIO DEL TIKETE");
        console.log("ESTADIA: " + diasESTADIA);
        console.log("DISTANCIA:" + Distancia);
        var valorTiket = Distancia * 2.5;
        var TotalDescuento = valorTiket * descuento;
        valorTiket = valorTiket - TotalDescuento;
        console.log("VALOR DEL TIKET: " + valorTiket);
    } else {
        console.log("ESTADIA: " + diasESTADIA);
        console.log("DISTANCIA:" + Distancia);
        var valorTiket = Distancia * 2.5;
        console.log("VALOR DEL TIKET: " + valorTiket);
    }
} else {
    console.log("SOLO SE RESIVEN VALORES NUMERICOS");
}