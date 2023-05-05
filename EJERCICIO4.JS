var tiempo= Math.floor(Math.random()*10);
if(!isNaN(tiempo)){
    if(tiempo<=3){
console.log("su tiempo de llamada es: "+tiempo+"minutos"+"\n tiempo su valor de la llamada es: "+200);
    }else{
        var variable=tiempo-3;
        variable=(variable*100)+200;
        console.log("su tiempo de llamada es: "+tiempo+"minutos"+"\nsu valor de la llamada es: "+variable);
    }
}else{
    console.log("NO SE RESIVEN VALORES VACIOS O ALFABETICOS");
}
    