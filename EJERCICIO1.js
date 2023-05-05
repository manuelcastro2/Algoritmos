//leer dos numeros y imprima en forma asendente 
var n1=parseInt(prompt("DIGITE EL PRIMER NUMERO "));
var n2=parseInt(prompt("DIGITE EL SEGUNDO NUMERO"));

if(!isNaN(n1) && !isNaN(n2)){
    if(n1>n2){
        console.log(n1+','+n2);
        }else if(n2>n1){
            console.log(n2+','+n1);
        }else{
        console.log(n1+','+n2);
        }
}else{
console.log("solo se resiven datos numericos");
}