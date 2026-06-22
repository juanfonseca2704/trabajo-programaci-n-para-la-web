function validar_placa() {

    let tipo = document.getElementById("tipo").value;
    let placa = document.getElementById("placa").value.toUpperCase();

    let formatoCarro = /^[A-Z]{3}[0-9]{3}$/;
    let formatoMoto = /^[A-Z]{3}[0-9]{2}[A-Z]{1}$/;

    if (placa === "") {
        alert("FALTA DATOS");
    } else {

        if (tipo === "carro") {
            if (formatoCarro.test(placa)) {
                console.log("Placa de carro válida");
            } else {
                alert("La placa no corresponde a un carro");
            }

        } else if (tipo === "moto") {
            if (formatoMoto.test(placa)) {
                console.log("Placa de moto válida");
            } else {
                alert("La placa no corresponde a una moto");
            }
        }
    }

    return {
        tipo: tipo,
        placa: placa
    };
}


// ------------------ FECHA ------------------
function validar_fecha() {

    let inicioValor = document.getElementById("inicio").value;
    let finValor = document.getElementById("fin").value;

    if (inicioValor === "" || finValor === "") {
        alert("Faltan fechas");
        return 0;
    }

    let inicio = new Date(inicioValor);
    let fin = new Date(finValor);

    let estadia = (fin - inicio) / (1000 * 60);

    document.getElementById("total").innerHTML = estadia + " minutos";

    return estadia;
}


// ------------------ PICO Y PLACA ------------------
function pico_placa() {

    let tipo = document.getElementById("tipo").value;
    let placa = document.getElementById("placa").value.toUpperCase();
    let fecha = new Date(document.getElementById("inicio").value);

    let dia = fecha.getDate();

    if (tipo === "moto") return false;

    let ultimaCifra = parseInt(placa.charAt(placa.length - 1));
    let diaPar = dia % 2 === 0;

    if (!diaPar) {
        return [1,2,3,4,5].includes(ultimaCifra);
    } else {
        return [6,7,8,9,0].includes(ultimaCifra);
    }
}


// ------------------ REDONDEO ------------------
function redondearCercano(valor) {

    let redondeado100 = Math.round(valor / 100) * 100;
    let redondeado50 = Math.round(valor / 50) * 50;

    let dif100 = Math.abs(valor - redondeado100);
    let dif50 = Math.abs(valor - redondeado50);

    return (dif50 <= dif100) ? redondeado50 : redondeado100;
}


// ------------------ COBRO ------------------
function cobro() {

    const cobro_carro = 125;
    const cobro_moto = 95;

    let tipo = document.getElementById("tipo").value;

    let minutos = validar_fecha();
    let descuento = pico_placa();

    let total = 0;

    if (tipo === "carro") {
        total = cobro_carro * minutos;

        if (descuento) {
            total = total * 0.75;
        }

    } else {
        total = cobro_moto * minutos;
    }

    total = redondearCercano(total);

    document.getElementById("cobro").innerHTML = total;

    return total;
}


// ------------------ BILLETES ------------------
function calcularBilletes(valor) {

    const billetes = [100000, 50000, 20000, 10000, 5000, 2000, 1000];

    let resultado = {};

    for (let i = 0; i < billetes.length; i++) {

        let cantidad = Math.floor(valor / billetes[i]);

        if (cantidad > 0) {
            resultado[billetes[i]] = cantidad;
            valor = valor % billetes[i];
        }
    }

    return resultado;
}


// ------------------ VUELTAS ------------------
function vueltas() {

    let valor = cobro();

    let pago = parseFloat(document.getElementById("pagar").value);

    let cambio = pago - valor;

    if (cambio < 0) {
        document.getElementById("vueltas").innerHTML = "Dinero insuficiente";
        return;
    }

    let billetes = calcularBilletes(cambio);

    let texto = `Cambio: ${cambio}<br><br>`;

    for (let b in billetes) {
        texto += `${billetes[b]} billete(s) de ${b}<br>`;
    }

    document.getElementById("vueltas").innerHTML = texto;

    return billetes;
}


// ------------------ RESULTADOS ------------------
function resultados() {

    let datos = validar_placa();
    let tipo = datos.tipo;
    let placa = datos.placa;

    let estadia = validar_fecha();
    let pico = pico_placa();
    let total = cobro();

    vueltas(); // ya muestra en pantalla

    document.getElementById("resultados").innerHTML =
    `
    tipo: ${tipo}<br>
    placa: ${placa}<br>
    estadia: ${estadia}<br>
    pico y placa: ${pico}<br>
    total: ${total}<br>
    `;
}