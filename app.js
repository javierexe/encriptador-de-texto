// Definimos variables
var textoIngresado = document.getElementById('cajaIngresoTexto').value;
var cajaTextoEncriptado = document.getElementById('cajaTextoEncriptado');
var botonCopiar = document.getElementById('copiar');



// Capturar el texto ingresado
cajaIngresoTexto.addEventListener('input', function capturarTexto() {
    console.log(textoIngresado);
})

// Encriptar el texto
function encriptarTexto() {
    const buscar = 'a'
    const reemplazarPor = 'ai'
    var textoIngresado = document.getElementById('cajaIngresoTexto').value;
    var textoEncriptado = textoIngresado.replaceAll(buscar, reemplazarPor);
    
// Mostrar el texto encriptado
cajaTextoEncriptado.value = textoEncriptado;
/*botonCopiar.style.display = 'block';*/
  // Mostrar el botón de copiar si hay texto encriptado
    if (textoEncriptado.trim() !== '') {
    botonCopiar.style.display = 'block';
    } else {
    botonCopiar.style.display = 'none';
    }
}


// Deshabilitar la capacidad de selección y edición del texto encriptado
cajaTextoEncriptado.addEventListener("mousedown", function(event) {
    event.preventDefault();
});

function copiarTexto() {
    var texto = cajaTextoEncriptado.value;
    
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto);
    cajaIngresoTexto.value = '';
    }

// Desencriptar el texto
function desencriptarTexto() {
    const buscar = 'ai'
    const reemplazarPor = 'a'
    textoIngresado = document.getElementById('cajaIngresoTexto').value;
    var textoDesencriptado = textoIngresado.replaceAll(buscar, reemplazarPor);
    cajaIngresoTexto.value = textoDesencriptado
}

