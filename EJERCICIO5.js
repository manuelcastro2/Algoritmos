var Ntotalconejos = parseInt(prompt("DIGITE EL NUMERO TOTAL DE CONEJOS EN LA GRANJA"));
var CNvendidos;
var CBvendidos;
if (!isNaN(Ntotalconejos)) {
    var conejosblancos = Math.floor(Math.random() * Ntotalconejos);
    var conejosegros = Ntotalconejos - conejosblancos;
    console.log("Numero Total De Conejos: " + Ntotalconejos);
    console.log("Cantidad De Conejos Blancos: " + conejosblancos);
    console.log("Cantidad De Conejos Negros: " + conejosegros);
    CNvendidos = parseInt(prompt("DIGITE LA CANTIDAD DE CONEJOS NEGROS VENDIDOS"));
    CBvendidos = parseInt(prompt("DIGITE LA CANTIDAD DE CONEJOS BLANCOS VENDIDOS"));
    if (!isNaN(CNvendidos) && !isNaN(CBvendidos)) {
      if(CNvendidos<=conejosegros&&CBvendidos<=conejosblancos){
        var CTotalventa = CNvendidos + CBvendidos;
        console.log("");
        console.log("PRECIO DE LOS CONEJOS NEGROS: $80.000");
        console.log("PRECIO DE LOS CONEJOS BlANCOS: $50.000");
        console.log("");
        console.log("N° Conejos Negros Vendidos: " + CNvendidos);
        console.log("N° Conejos Blancos Vendidos: " + CBvendidos);
        console.log("El total de Conejos Vendidos: " + CTotalventa);
        var CNtotal = CNvendidos * 80000;
        var CBtotal = CBvendidos * 50000;
        var totalventa = CNtotal + CBtotal;
        console.log("MONTO DE LA VENTA DE CONEJOS BLANCOS: " + CBtotal);
        console.log("MONTO DE LA VENTA DE CONEJOS NEGROS: " + CNtotal);
        console.log("MONTO TOTAL DE LA VENTA DE LOS CONEJOS: " + totalventa);
        if (CBtotal > CNtotal) {
            console.log("Los Conejos De Color Blanco Se Vendieron mas");
        } else if (CNtotal > CBtotal) {
            console.log("Los Conejos De Color Negro Se Vendieron mas");
        } else {
            console.log("AMBOS COLORES DE CONEJOS SU MONTON TIENEN EL MISMO VALOR");
        }
      }else{
        console.log("NO PUEDE SUPERAR LA CANTIDA DE CONEJOS VENDIDOS A LOS CONEJOS NEGROS Y BLANCOS QUE TIENE EN LA GRANJA");
      console.log("ADEMAS SU CANTIDA DE CONEJOS BLANCOS Y NEGROS SON:");
      console.log("B:"+conejosblancos+"\nN:"+conejosegros);
    }
    } else {
        console.log("no se resiven parametros vacios ni alfabeticos");
    }
} else {
    console.log("no se resiven parametros vacios ni alfabeticos");
}
