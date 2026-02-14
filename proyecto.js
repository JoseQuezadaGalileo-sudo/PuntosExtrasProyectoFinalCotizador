let opcion = "";
while(opcion !== "Salir"){
    let nombre_cliente;
    let edad_cliente;
    let nombre_conyugue;
    let edad_conyugue;
    let casado;
    let cantidad_hijos;
    let precio_base = 2000;
    let recargo = 0;
    let recargo_conyugue = 0;
    let recargo_hijos = 0;
    let tiene_hijos;
    let sub_total = precio_base;
    let tiene_propiedades;
    let propiedades_cliente;
    let recargo_propiedad = 0;
    let cantidad_salario;
    let recargo_salario = 0;

    nombre_cliente = prompt("Ingrese su nombre, por favor: ");
    edad_cliente = parseInt(prompt("Ingrese su edad en números: "));

    if(edad_cliente >= 18)
    {
        if(edad_cliente >= 18 && edad_cliente <=24)
        {
            recargo = precio_base * 0.10;
            sub_total = sub_total + recargo;
        } else if(edad_cliente >= 25 && edad_cliente <= 49){
            recargo = precio_base * 0.20;
            sub_total = sub_total + recargo;
        } else if(edad_cliente >= 50 && edad_cliente <= 200){
            recargo = precio_base * 0.30;
            sub_total = sub_total + recargo;
        } else{
            alert("Edad no válida");
        }
        casado = prompt("¿Tiene conyugue? si/no");
        if(casado.toUpperCase() === 'SI'){
            edad_conyugue = parseInt(prompt("Ingrese la edad del conyugue: "));
            if(edad_conyugue < 18){
                alert("El conyugue debe ser mayor de edad");
            } else if(edad_conyugue >= 18 && edad_conyugue <= 24){
                recargo_conyugue = precio_base * 0.10;
                sub_total = sub_total + recargo_conyugue;
            } else if(edad_conyugue >= 25 && edad_conyugue <= 49){
                recargo_conyugue = precio_base * 0.20;
                sub_total = sub_total + recargo_conyugue;
            } else if(edad_conyugue >= 50 && edad_conyugue <= 200){
                recargo_conyugue = precio_base * 0.30;
                sub_total = sub_total + recargo_conyugue;
            } else{
                alert("Edad no válida");
            }
        }
        tiene_hijos = prompt("¿Tiene hijos? si/no");
        if(tiene_hijos.toUpperCase() === 'SI'){
            cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
            recargo_hijos = (precio_base * 0.20) * cantidad_hijos;
            sub_total = sub_total + recargo_hijos;
        }
        tiene_propiedades = prompt("¿Tiene propiedades? si/no");
        if(tiene_propiedades.toUpperCase() == 'SI'){
            propiedades_cliente = parseInt(prompt("¿Cuántas propiedades tiene?"));
            recargo_propiedad = (sub_total * 0.35) * propiedades_cliente;
            sub_total = sub_total + recargo_propiedad;
        }
        cantidad_salario = parseFloat(prompt("Ingrese la cantidad de su salario: "));
        recargo_salario = cantidad_salario * 0.05;
        sub_total = sub_total + recargo_salario;

        alert("Cotización para " + nombre_cliente + " con " + edad_cliente +" años.\nPrecio Base: Q" +precio_base+"\n"
            +"Cotización del cliente: Q" +sub_total+", Recargo de Q" + recargo +"\n"
            +"Conyugue: "+casado+" Recargo conyugue: Q" +recargo_conyugue + "\n"
            +"Hijos: " + tiene_hijos + " Recargo hijos: Q"+recargo_hijos+"\n"
            +"Propiedades: "+ propiedades_cliente + " Recargo propiedades: Q" + recargo_propiedad+"\n"
            +"Salario: Q" +cantidad_salario + " Recargo salario: Q" + recargo_salario+"\n"
            +"Total: Q"+sub_total);
        
        opcion = prompt(`Ingrese "Salir" para salir del programa.\n Presione enter para continuar.`);
    } else {
        alert("No es posible realizar cotizaciones de seguros a clientes menores de edad");
    }
}