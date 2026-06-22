function recogerDatos(){
    let nom, tel, correo, frec, dia;
    let cantA, cantAA, cantAAA, ctotal, vtotal, dcto=0, otrod=0, vfinal, totalPago;

    nom = document.getElementById("cliente").value;     
    tel = document.getElementById("tel").value;         
    correo = document.getElementById("email").value;    
    frec = document.getElementById("frec").checked;     
    cantA = document.getElementById("cantA").value;     
    cantAA = document.getElementById("cantAA").value;   
    cantAAA = document.getElementById("cantAAA").value; 
    dia = document.getElementById("dia").value;         
    
    ctotal = parseInt(cantA) + parseInt(cantAA) + parseInt(cantAAA);
    vtotal = (parseInt(cantA)*600) + (parseInt(cantAA)*700) + (parseInt(cantAAA)*750);
    if(ctotal>=30 && ctotal<=45){
        dcto = vtotal*0.1;
    } else if(ctotal>=46 && ctotal<=70){
        dcto = vtotal*0.15;
    } else if(ctotal>=71 && ctotal<=100){
        dcto = vtotal*0.2;
    } else if(ctotal>100){
        dcto = vtotal*0.25;
    } else {
        dcto = 0;
    }
    if (frec===true){
        otrod = vtotal * 0.025;
        frec = ". Sí";
    } else {
        otrod = 0;
        frec = ". No";
    }

    vfinal = vtotal - dcto - otrod;

    switch (dia){
        case "1":
            totalPago = vfinal+(vfinal*0.05);
            dia = "de Lunes a Viernes";
            break;
        case "2":
            totalPago = vfinal-(vfinal*0.05);
            dia = "Sábado";
            break;
        case "3":
            totalPago = vfinal;
            dia = "Domingo";
            break;
    }

    document.getElementById("resultados").innerHTML=
    `
    -Nombre:${nom}

    <br>-huevos tipo A ${cantA}
    <br>-huevos tipo AA ${cantAA}
    <br>-huevos tipo AAA ${cantAAA}
    <br>-dia de combra ${dia}
    <br>-cliente frecuente ${frec}
    <br>-Cantidad total ${ctotal}
    <br>-valor total $${vtotal}
    <br>-descuento $${dcto}
    <br>-descuento cliente fecuente $${otrod}
    <br>-total a pagar $${totalPago}
    `;   
}