/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("ingresa tu nombre");
  datosPersona.edad = 2024 -parseInt(prompt("Ingresa tu año de nacimiento")) ;
  datosPersona.ciudad = prompt("En que ciudad vives?")
  datosPersona.interesPorJs = confirm("Estas interasado en javascript?") ? "Sí" : "No";

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const  ciudad = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#javascript");

  nombre.textContent = datosPersona.nombre;
  edad.textContent = datosPersona.edad;
  ciudad.textContent = datosPersona.ciudad;
  interesPorJs.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const materias = document.querySelector("#fila")
  if (materias.childNodes.length == 0){
      listado.forEach(item => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    div.setAttribute("class", "caja")

    img.setAttribute("src",item.imgUrl);
    img.setAttribute("alt",item.lenguajes);

    p1.setAttribute("class","lenguajes");
    p1.textContent = item.lenguajes;

    p2.setAttribute("class", "bimestre");
    p2.textContent= item.bimestre;

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    materias.appendChild(div)

  });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio = document.querySelector("#sitio");
  if (sitio.classList.contains('dark')){
    sitio.classList.remove('dark');
  } else {
    sitio.classList.add('dark');
  }
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener('keydown', (event) => {
  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#sobre-mi').classList.remove('oculto');
  }
});