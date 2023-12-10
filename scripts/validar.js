function validarCampos() {
  const inputNombre = document.getElementById("nombre");
  const inputApellido = document.getElementById("apellido");
  const inputDocumento = document.getElementById("documento");

  var valor = inputNombre.value.trim();
  if (valor.length <= 5) {
    alert("El nombre no es correcto");
    return false;
  }

  valor = inputApellido.value.trim();
  if (valor.length <= 5) {
    alert("El apellido no es correcto");
    return false;
  }

  valor = Number(inputDocumento.value);
  if (isNaN(valor) || valor < 10 || valor > 100000000) {
    alert("El número de documento no es correcto");
    return false;
  }

  return true;
}
