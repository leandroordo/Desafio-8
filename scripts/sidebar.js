const styles = [
  "",
  "./styles/estilos.css",
  "./styles/estilos-futuro.css",
  "./styles/estilos-retro.css",
];
var currentStyleIndex = 0;
const botonRecordar = document.getElementById("boton-recordar");

var rememberMe = GetSetting("RememberMe");
if (rememberMe && rememberMe === "1") {
  botonRecordar.className += " boton-icono-checked";
  currentStyleIndex = Number(GetSetting("Estilo"));
  setStylesheet(styles[currentStyleIndex]);
}

function GetSetting(nombre) {
  return localStorage.getItem(nombre);
}

function SaveSetting(nombre, valor) {
  return localStorage.setItem(nombre, valor);
}

/*Muestra el sidebar para cambiar la configuración de estilos*/
function showConfig() {
  const div = document.getElementById("sidebarDiv");
  const boton = document.getElementById("boton-configuracion");

  div.style.right = "0";
  boton.style.visibility = "hidden";
}

function closeConfig() {
  const div = document.getElementById("sidebarDiv");
  const boton = document.getElementById("boton-configuracion");

  div.style.right = "-320px";
  boton.style.visibility = "";
}

function cambiarEstiloSiguiente() {
  currentStyleIndex++;
  if (currentStyleIndex > 3) {
    currentStyleIndex = 0;
  }

  setStylesheet(styles[currentStyleIndex]);
}

function cambiarEstiloRandom() {
  currentStyleIndex = Math.floor(Math.random() * 4);
  setStylesheet(styles[currentStyleIndex]);
}

function setStylesheet(newStylesheet) {
  const oldStylesheet = document.getElementsByTagName("link").item(0);
  const head = document.getElementsByTagName("head").item(0);

  var newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("type", "text/css");
  newLink.setAttribute("href", newStylesheet);

  head.replaceChild(newLink, oldStylesheet);

  //Ver si hay que guardar el estilo actual
  if (rememberMe === "1") {
    SaveSetting("Estilo", currentStyleIndex);
  }
}

function onItemSelected() {
  const stylesList = document.getElementById("sidebar-list");

  currentStyleIndex = stylesList.selectedIndex;
  setStylesheet(styles[currentStyleIndex]);
}

function cambiarRecordar() {
  if (!rememberMe) {
    rememberMe = "1";
  } else {
    rememberMe = rememberMe === "0" ? "1" : "0";
  }
  SaveSetting("RememberMe", rememberMe);
  SaveSetting("Estilo", currentStyleIndex);

  if (rememberMe === "1") {
    botonRecordar.className += " boton-icono-checked";
  } else {
    botonRecordar.className = "boton-icono";
  }
}
