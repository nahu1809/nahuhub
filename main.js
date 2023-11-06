  // Función para obtener el valor del dólar oficial desde la API de DolarAPI
  function obtenerDolarOficial() {
    fetch('https://dolarapi.com/v1/dolares/oficial')
        .then(response => response.json())
        .then(data => {
            // Aca puedes actualizar el valor del dólar oficial en tu sitio web
            const valorDolarOficial = data.compra; // O data.venta si prefieres el valor de venta

            // Actualiza los precios en la tabla
            const preciosDolares = document.querySelectorAll(".precio-en-dolares");
            const preciosPesos = document.querySelectorAll(".precio-en-pesos");

            preciosDolares.forEach((precioDolares, index) => {
                const precioDolaresValue = parseFloat(precioDolares.textContent);
                const precioPesos = precioDolaresValue * valorDolarOficial;
                // Formatea el precio en pesos con dos decimales y el símbolo "$"
                preciosPesos[index].textContent = `$${precioPesos.toFixed(2)}`;
                // Función para convertir precios en dólar blue a dólar oficial
function convertirDolarBlueADolarOficial(precioDolarBlue) {
    fetch('https://dolarapi.com/v1/dolares/oficial')
        .then(response => response.json())
        .then(data => {
            const valorDolarOficial = data.compra; // O data.venta si prefieres el valor de venta
            const precioDolarOficial = precioDolarBlue / valorDolarOficial;
            // Aquí puedes hacer lo que necesites con el precio en dólar oficial
            console.log(`Precio en dólar oficial: ${precioDolarOficial}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Llamada a la función para convertir un precio de dólar blue a dólar oficial
const precioDolarBlue = 100; // Reemplaza con el precio en dólar blue que tengas
convertirDolarBlueADolarOficial(precioDolarBlue);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
        const botonActualizar = document.getElementById('actualizar-btn');
    const iconoActualizar = document.getElementById('actualizar-icono');

    botonActualizar.addEventListener('click', () => {
        // Agrega la clase para la rotación

        // Recarga la página después de un tiempo (por ejemplo, 1 segundo)
        setTimeout(() => {
            location.reload();
        }, 1000); // 1000 milisegundos = 1 segundo
    });
}

// Llama a la función para obtener el valor del dólar oficial y actualizar los precios
obtenerDolarOficial();

// Agrega un evento de clic al botón de "Actualizar Precios"
document.getElementById('actualizar-btn').addEventListener('click', obtenerDolarOficial);

        // Detecta la configuración del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El sistema prefiere el modo oscuro, cambia la clase del body
    document.body.classList.add('modo-oscuro');
// Agrega un botón de alternancia (puedes hacer esto en tu código HTML)
const botonModo = document.getElementById('modo-btn');

}