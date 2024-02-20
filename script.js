// JavaScript adicional para la página

// Función para cambiar el color de fondo del cuerpo de la página
function cambiarColor() {
    var body = document.querySelector('body'); // Selecciona el elemento <body>
    var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16); // Genera un color hexadecimal aleatorio
    body.style.backgroundColor = colorAleatorio; // Cambia el color de fondo del cuerpo de la página
}

// Función para mostrar un mensaje de bienvenida
function mostrarMensaje() {
    alert('¡Bienvenido a mi página web!'); // Muestra un cuadro de alerta con un mensaje de bienvenida
}
