// Cada ejercicio estará separado por funciones :3

function ejercicio_1(){
    let nota1, nota2;

    nota1 = parseFloat(prompt("Ingrese la nota práctica"));
    nota2 = parseFloat(prompt("Ingrese la nota teórica"));

    if(nota1 >= 4 && nota2 >= 4){
        document.getElementById("resultados_1").innerHTML =
        "Su nota es " + ((nota1 * 0.35) + (nota2 * 0.65));
    }else{
        document.getElementById("resultados_1").innerHTML =
        "Su definitiva es 0";
    }
}

function ejercicio_2(){
    let venta, cant, comi;

    venta = parseFloat(prompt("Ingrese el valor de ventas, en millones"));
    cant = parseInt(prompt("Ingrese el número de autos vendidos"));
    comi = parseFloat(prompt("Ingrese el total de ventas en millones"));

    if(venta > 500 || cant > 10){
        document.getElementById("resultados_2").innerHTML =
        "Felicidades has conseguido la comisión de $" + (comi * 0.025) + " millones";
    }else{
        document.getElementById("resultados_2").innerHTML =
        "No superó las metas planteadas";
    }
}

function ejercicio_3(){
    let clase, medida;

    clase = parseInt(prompt("METROS = 1 / KILÓMETROS = 2 / MILLAS = 3"));
    medida = parseFloat(prompt("Ingrese la medida"));

    switch(clase){
        case 1:
            document.getElementById("resultados_3").innerHTML =
            "Metro = " + medida +
            ", Kilómetro = " + (medida * 0.001) +
            ", Milla = " + (medida * 0.000609);
        break;

        case 2:
            document.getElementById("resultados_3").innerHTML =
            "Kilómetro = " + medida +
            ", Metro = " + (medida * 1000) +
            ", Milla = " + (medida * 0.621);
        break;

        case 3:
            document.getElementById("resultados_3").innerHTML =
            "Milla = " + medida +
            ", Kilómetro = " + (medida * 1.609) +
            ", Metro = " + (medida * 1609.34);
        break;

        default:
            document.getElementById("resultados_3").innerHTML = "ERROR";
    }
}

function ejercicio_4(){
    alert("recargando, oprima aceptar");

    let num, uni, dec, cent, unimil, decmil, centmil;

    num = parseInt(prompt("Ingrese un número de 6 cifras"));

    uni = Math.trunc(num % 10);
    cent = Math.trunc(num / 10) % 10;
    dec = Math.trunc(num / 100) % 10;
    unimil = Math.trunc(num / 1000) % 10;
    decmil = Math.trunc(num / 10000) % 10;
    centmil = Math.trunc(num / 100000) % 10;

    document.getElementById("resultados_4").innerHTML =
    `
    <br>Centenas de mil: ${centmil}
    <br>Decenas de mil: ${decmil}
    <br>Unidades de mil: ${unimil}
    <br>Centenas: ${cent}
    <br>Decenas: ${dec}
    <br>Unidades: ${uni}
    <br><br>=== RESULTADOS ===<br>
    ${unimil} + ${cent} = ${unimil + cent}<br>
    ${uni} x ${centmil} = ${uni * centmil}<br>
    ${decmil} - ${dec} = ${decmil - dec}<br>
    `;
}

function ejercicio_5(){
    let hr, min, seg;

    hr = parseInt(prompt("Ingrese horas"));
    min = parseInt(prompt("Ingrese minutos"));
    seg = parseInt(prompt("Ingrese segundos"));

    if(hr == 23 && min == 59 && seg == 59){
        hr = 0; min = 0; seg = 0;
    }else if(min == 59 && seg == 59){
        hr++; min = 0; seg = 0;
    }else if(seg == 59){
        min++; seg = 0;
    }else{
        seg++;
    }

    document.getElementById("resultados_5").innerHTML =
    "La hora un segundo después es = " + hr + ":" + min + ":" + seg;
}

function ejercicio_6(){
    let a, b, c, d, x, x1, x2;

    a = parseFloat(prompt("Ingrese A"));
    b = parseFloat(prompt("Ingrese B"));
    c = parseFloat(prompt("Ingrese C"));

    d = b*b - 4*a*c;

    document.getElementById("resultados_6").innerHTML =
    `
    === ECUACIÓN CUADRÁTICA ===<br>
    ax² + bx + c<br>
    Discriminante (d) = ${d}<br>
    `;

    if(d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);

        document.getElementById("resultados_6").innerHTML +=
        `
        Tiene dos soluciones reales<br>
        x1 = ${x1}<br>
        x2 = ${x2}
        `;
    }else if(d == 0){
        x = (-b) / (2 * a);

        document.getElementById("resultados_6").innerHTML +=
        `
        Tiene una solución<br>
        x = ${x}
        `;
    }else{
        document.getElementById("resultados_6").innerHTML +=
        "No tiene soluciones reales";
    }
}

function ejercicio_7(){
    let menu=0,temperatura=0;
    let menor0=[]
    let igual0=[]
    let mayor0=[]
    let registro=[]

    while(menu != 2){
        menu= parseInt(prompt("1. Ingresar una temperatura\n2. ver datos"));

        switch(menu){
            case 1:
                temperatura=parseInt(prompt("ingrese la temperatura"));

                if(temperatura>99 || temperatura <-99){
                    alert("dato invalido");
                }else if (temperatura>0){
                    mayor0.push(temperatura);
                    registro.push(temperatura);
                    alert("temperatura agregada");
                }else if(temperatura==0){
                    igual0.push(temperatura);
                    registro.push(temperatura);
                    alert("temperatura agregada");
                }else{
                    menor0.push(temperatura);
                    registro.push(temperatura);
                    alert("temperatura agregada");
                }
                break;

            case 2:
                break;
        }
    }

    document.getElementById("resultados_7").innerHTML =
    "TEMPERATURAS<br>" +
    "menores a 0:<br>" + menor0.length + "<br>" +
    "iguales a 0:<br>" + igual0.length + "<br>" +
    "mayores a 0:<br>" + mayor0.length + "<br>" +
    "REGISTRO<br>" + registro;
}

function ejercicio_8(){
    let cifra,c1,c2,c3,c4,existe;
    let tipo=["dirigible","avion militar","avion civil de carga","avion civil de pasajeros","aeronave sin permiso","aeronave de supertranzporte","aeronave enemiga","avion mixto","helicoptero","globo aerostatico"]
    let lugar=["norte","norte","sur","sur","oriente","oriente","occidente","occidente","desconocido","desconocido"]

    cifra=prompt("ingrese los datos")

    c4=Math.trunc(cifra%10)
    c3=Math.trunc(cifra/10)%10;
    c2=Math.trunc(cifra/100)%10;
    c1=Math.trunc(cifra/1000)%10;

    if(c1%2===0){
        existe=true;
    }else{
        existe=false;
    }

    let salida = "Hay una aeronave en el area: " + existe;

    if(existe){
        salida += "<br>Tipo de aeronave: " + tipo[c2];
        salida += "<br>Hay una aeronave a " + c3 + "Km";
        salida += "<br>Viene una aeronave del " + lugar[c4];
    }else{
        salida += "<br>No hay aeronaves";
    }

    document.getElementById("resultados_8").innerHTML = salida;
}

function ejercicio_9(){
    let A,AA,AAA,cant1,cant2,cant3,total,precio1,desc,preciot;
    let frec, dia;
    const fecha=["lunes-viernes","sabado","domingo"];

    do{
        cant1=parseInt(prompt("cantidad de huevos tipo A:"));
    }while(cant1<0);

    do{
        cant2=parseInt(prompt("cantidad de huevos tipo AA:"));
    }while(cant2<0);

    do{
        cant3=parseInt(prompt("cantidad de huevos tipo AAA:"));
    }while(cant3<0);

    do{
        frec=prompt("Si es cliente frecuente digite 1 de lo contrario 0:");
    }while(frec!=1 && frec!=0);

    total=cant1+cant2+cant3;

    do{
        dia=parseInt(prompt("Digite 1, si compro entre Lunes o viernes, 2 si compro el sabado, 3 si compro el domingo:"));
    }while(dia<1 || dia>3)

    if(dia==1){
        A=600+(600*0.05);
        AA=700+(700*0.05);
        AAA=750+(750*0.05);
    }else if(dia==2){
        A=600-(600*0.05);
        AA=700-(700*0.05);
        AAA=750-(750*0.05);
    }else{
        A=600;
        AA=700;
        AAA=750;
    }

    precio1=((A*cant1)+(AA*cant2)+(AAA*cant3));

    if(total>=30 && total<=45){
        desc=(precio1-(precio1*0.1));
    }else if(total>=46 && total<=70){
        desc=(precio1-(precio1*0.15));
    }else if(total>=71 && total<=100){
        desc=(precio1-(precio1*0.2));
    }else if(total>=101){
        desc=(precio1-(precio1*0.25));
    }else{
        desc=precio1;
    }

    if(frec==1){
        preciot=desc-(precio1*0.025);
    }else{
        preciot=desc;
    }

    document.getElementById("resultados_9").innerHTML =
    "Total huevos A: "+cant1+
    "<br>Total huevos AA: "+cant2+
    "<br>Total huevos AAA: "+cant3+
    "<br>Total huevos: "+total+
    "<br>Dia de la compra: "+fecha[dia-1]+
    "<br>precio de tipo de huevo:<br>A: "+A+"<br>AA: "+AA+"<br>AAA: "+AAA+
    "<br>precio de la compra: "+precio1+
    "<br>precio descuento por cantidad: "+desc+
    "<br>precio de cliente frecuente: "+preciot+
    "<br><h2>==Gracias por su compra==<h2>";
}

function ejercicio_10(){
    let  n,x,i=2,cont=1;
    x=parseInt(prompt("Ingrese el número que será X: "));
    while (isNaN(x) || x === "") {
        x = parseInt(prompt("Error. Ingrese un número válido: "));
    }
    n=parseInt(prompt("Ingrese el numero de veces que desea que se repita: "));
    while (isNaN(n) || n === "") {
        n = parseInt(prompt("Error. Ingrese un número válido: "));
    }

    do{
        let oper=(x**i)/i;
        document.getElementById("resultados_10").innerHTML +=
        `<h6>${x}<sup>${i}</sup><br>--- = ${oper}<br>${i}<br><br></h6>`;
        i+=2;
        cont++;
    }while(cont<=n);
}

function ejercicio_11(){
    let menu,persona=400,aje=0,atl=0,fut=0,gim=0,nat=0;

    do{
        menu=parseInt(prompt('Selecione el deporte que practica\n1.Ajedrez\n2.Atletismo\n3.Futbol\n4.Gimnasia\n5.Natacion\n6.salir'));

        if(menu==1){
            aje++;
            persona--;
        }else if(menu==2){
            atl++;
            persona--;
        }else if(menu==3){
            fut++;
            persona--;
        }else if(menu==4){
            gim++;
            persona--;
        }else if(menu==5){
            nat++;
            persona--;
        }else if(menu==6){
            alert("Cerrando registro");
        }else{
            alert("Digite valores permitidos");
        }

    }while(menu!=6 && persona>0);

    document.getElementById("resultados_11").innerHTML +=
    `
    <h2>RESULTADOS</h2>
    <h3>
    Ajedrez: ${aje}<br>
    Atletismo: ${atl}<br>
    Futbol: ${fut}<br>
    Gimnasia: ${gim}<br>
    Natación: ${nat}<br>
    </h3>
    `;
}

function ejercicio_12(){
    let intentos=3;
    let contrasena="hola1234";
    let ingreso;

    do{
        ingreso=prompt("Digite la contraseña");

        if(ingreso === contrasena){
            alert("ACCESO CONCEDIDO");
        }else{ 
            intentos--;
            if(intentos>0){
                alert("ACCESO DENEGADO");
            }else{
                document.getElementById("resultados_12").innerHTML+="ALERTA INTRUSO";
            }
        }

    }while(intentos>0 && ingreso!==contrasena);
}

function ejercicio_13(){
    let num, par=0, impar=0;

    do{
        num=parseInt(prompt("Ingrese solo números pares: "));

        if((num%2)===0){
            par++;
        }else{
            impar++;
        }

    }while((num%2)===0);

    document.getElementById("resultados_13").innerHTML +=
    "Numeros pares ingresados: " + par;
}

function ejercicio_14(){
    let dias=["lunes","martes","miercoles","jueves","Viernes","sabado","domingo"];
    let dia=parseInt(prompt("ingrese un numero del 1 al 7, 1 siendo lunes y 7 siendo domingo"));

    if(dia>=1 && dia<=7){
        document.getElementById("resultados_14").innerHTML +=
        "El dia ingresado es: " + dias[dia-1];
    }else{
        document.getElementById("resultados_14").innerHTML +=
        "NUMERO INVALIDO";
    }
}