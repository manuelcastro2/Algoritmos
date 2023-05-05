do {
    opcion = parseInt(prompt("ALGORITMO\n1.EJECUTAR ALGORITMO\n0.SALIR"));

    switch (opcion) {
        case 1:
            var articulo = prompt("DIGITE EL NOMBRE DEL ARTICULO");
            var clave = parseInt(prompt("DIGITE LA CLAVE DEL PRODUCTO"));
            var precio = parseInt(prompt("DIGITE EL PRECIO ORIGINAL DEL PRODUCTO"));
            var cantidad = parseInt(prompt("DIGIGTE LA CANTIDAD TOTAL DEL PRODUCTO QUE VA A PAGAR"));
            var descuento = 0;
            var precioFinal;

            if (!isNaN(clave) && !isNaN(precio) && !isNaN(cantidad)) {
                console.log("ARTICULO: " + articulo);
                console.log("CLAVE: " + clave);
                console.log("CANTIDAD: " + cantidad);
                console.log("PRECIO ORIGINAL: " + precio);
                var precioCantidad = precio * cantidad;
                if (clave == 1) {
                    descuento = precioCantidad * 0.1;
                    console.log("DESCUENTO: " + descuento);
                } else {
                    descuento = precioCantidad * 0.2;
                    console.log("DESCUENTO: " + descuento);
                }
                precioFinal = precioCantidad - descuento;
                console.log("PRECIO FINAL:" + precioFinal);
            } else {
                console.log("SOLO SE RESIVEN PARAMETROS NUMERICOS EN EL CAMPO DE CLAVE,PRECIO,CANTIDAD");
            }
            break;
        case 0:
            console.log("SE FINALIZO EL ALGORITMO");
            break;

        default:
            console.log("ERROR-> los parametros que coloco no se permiten");
            break;
    }
} while (opcion != 0);