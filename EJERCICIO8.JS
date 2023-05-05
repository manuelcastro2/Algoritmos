var psiquiatria=0;
var pediatria=0;
var traumologia=0;
var presupuesto_anual=parseFloat(prompt("DIGITE EL PRESUPUESTO ANUAL DEL HOSPITAL"));

if(!isNaN(presupuesto_anual)){
psiquiatria=parseInt(prompt("DIGITE EL PORCENTAJE DEL PRESUPUESTO CORRESPONDIENTE A PSIQUIATRIA"));
pediatria=parseInt(prompt("DIGITE EL PORCENTAJE DEL PRESUPUESTO CORRESPONDIENTE A PEDIATRIA"));
traumologia=parseInt(prompt("DIGITE EL PORCENTAJE DEL PRESUPUESTO CORRESPONDIENTE A TRAUMOLOGIA"));
if(!isNaN(psiquiatria)&&!isNaN(pediatria)&&!isNaN(traumologia)){
    var sumaPorcentaje=pediatria+psiquiatria+traumologia
if(sumaPorcentaje==100){
var prePsiquiatria=presupuesto_anual*(psiquiatria*0.01);
var prePediatria=presupuesto_anual*(pediatria*0.01);
var preTraumologia=presupuesto_anual*(traumologia*0.01);
console.log("PRESUPUESTO: "+presupuesto_anual);
console.log("PSIQUIATRIA: "+psiquiatria+"%"+" -> "+prePsiquiatria);
console.log("PEDIATRIA "+pediatria+"%"+" -> "+prePediatria);
console.log("TRAUMOLOGIA: "+traumologia+"%"+" -> "+preTraumologia);
}else{
console.log("ERROR->los porcentajes digitados son superiores al 100%");
}
}else{
    console.log("no se reciben valores vacios ni alfabeticos");
}

}else{
    console.log("no se reciben valores vacios ni alfabeticos");
}