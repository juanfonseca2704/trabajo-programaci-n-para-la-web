const btnAgregar = document.getElementById("btnAgregar");
const tablaBody = document.querySelector("#tabla tbody");
const totalGeneral = document.getElementById("totalGeneral");

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos.");
    return;
  }

  agregarProducto(nombre, cantidad, precio);
  limpiar();
});

function agregarProducto(nombre, cantidad, precio) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
            <td>${nombre}</td>

            <td>
                <button class="menos">–</button>
                <span class="cant">${cantidad}</span>
                <button class="mas">+</button>
            </td>

            <td>
                $<span class="precio">${precio}</span>
                <button class="editarPrecio">✏️</button>
            </td>

            <td>$<span class="total">${(cantidad * precio).toFixed(
              2
            )}</span></td>

            <td><button class="eliminar">🗑️</button></td>
        `;

  tablaBody.appendChild(tr);
  recalcularTotal();
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}

tablaBody.addEventListener("click", function (e) {
  const fila = e.target.closest("tr");

  if (e.target.classList.contains("mas")) {
    let cant = fila.querySelector(".cant");
    cant.textContent = parseInt(cant.textContent) + 1;
  }

  if (e.target.classList.contains("menos")) {
    let cant = fila.querySelector(".cant");
    let actual = parseInt(cant.textContent);
    if (actual > 0) cant.textContent = actual - 1;
  }

  if (e.target.classList.contains("editarPrecio")) {
    let precioSpan = fila.querySelector(".precio");
    const nuevo = prompt("Nuevo precio:", precioSpan.textContent);
    if (nuevo !== null && !isNaN(parseFloat(nuevo))) {
      precioSpan.textContent = parseFloat(nuevo);
    }
  }

  if (e.target.classList.contains("eliminar")) {
    fila.remove();
  }

  actualizarFila(fila);
  recalcularTotal();
});

function actualizarFila(fila) {
  const cant = parseInt(fila.querySelector(".cant").textContent);
  const precio = parseFloat(fila.querySelector(".precio").textContent);

  const total = fila.querySelector(".total");
  total.textContent = (cant * precio).toFixed(2);

  if (cant === 0) {
    fila.classList.add("low-stock");
  } else {
    fila.classList.remove("low-stock");
  }
}

function recalcularTotal() {
  let suma = 0;

  const totales = document.querySelectorAll("#tabla tbody .total");

  totales.forEach((t) => {
    const valor = parseFloat(t.textContent);
    if (!isNaN(valor)) {
      suma += valor;
    }
  });

  totalGeneral.textContent = "Total general: $" + suma.toFixed(2);
}
const selector = document.getElementById("nombre");
const preview = document.getElementById("previewProducto");

const imagenes = {
  none: "",
  black_templars: "./images/black_templars.png",
  blood_angel: "./images/blood_angel.png",
  brazen_claws: "./images/brazen_claws.png",
  carcharodons: "./images/carcharodons.png",
  dark_angels: "./images/dark_angels.png",
  exorcists: "./images/exorcists.png",
  imperial_fists: "./images/imperial_fists.png",
  imperial_warmergs: "./images/imperial_warmergs.png",
  iron_hands: "./images/iron_hands.png",
  mants_warriors: "./images/mants_warriors.png",
  minotaurs: "./images/minotaurs.png",
  raptors: "./images/raptors.png",
  salamanders: "./images/salamanders.png",
  senthes_of_the_emperador: "./images/senthes_of_the_emperador.png",
  silver_skulls: "./images/silver_skulls.png",
  silver_templars: "./images/silver_templars.png",
  space_wolfs: "./images/space_wolfs.png",
  ultramarines: "./images/ultramarines.png",
  void_tridents: "./images/void_tridents.png",
  white_sears: "./images/white_sears.png"
};

selector.addEventListener("change", () => {
  preview.src = imagenes[selector.value];
});