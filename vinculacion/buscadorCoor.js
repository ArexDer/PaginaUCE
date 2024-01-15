var paginaActual = 1;
var coordinadoresPorPagina = 4; // Ajusta esto según tu necesidad

function buscarCoordinador() {
  var input, filter, coordinadores, coordinador, txtValue;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  coordinadores = document.getElementsByClassName('coordinador');

  for (var i = 0; i < coordinadores.length; i++) {
    coordinador = coordinadores[i];
    txtValue = coordinador.innerText || coordinador.textContent;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      coordinador.style.display = '';
    } else {
      coordinador.style.display = 'none';
    }
  }
}

function cambiarPagina(direccion) {
  paginaActual += direccion;

  if (paginaActual < 1) {
    paginaActual = 1;
  }

  mostrarCoordinadores();
}

function mostrarCoordinadores() {
  var coordinadores = document.getElementsByClassName('coordinador');

  for (var i = 0; i < coordinadores.length; i++) {
    var inicio = (paginaActual - 1) * coordinadoresPorPagina;
    var fin = inicio + coordinadoresPorPagina - 1;

    if (i >= inicio && i <= fin) {
      coordinadores[i].style.display = '';
    } else {
      coordinadores[i].style.display = 'none';
    }
  }

  document.getElementById('paginaActual').textContent = paginaActual;
}