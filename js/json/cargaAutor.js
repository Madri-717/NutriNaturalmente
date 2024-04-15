// Obtener referencia al div donde se mostrará la información
const autorInfoDiv = document.getElementById('autorInfo');

// Cargar el archivo JSON
fetch('js/json/autor.json')
  .then(response => response.json()) // Parsear la respuesta JSON
  .then(data => {
    // Acceder a la información del JSON
    const autor = data.autorHTML[0];
    
    // Estilos CSS para centrar los párrafos de texto
    const paragraphStyle = 'text-align: center;';

    // Crear elementos HTML para mostrar la información
    const cedulaPara = document.createElement('p');
    cedulaPara.textContent = `Cédula: ${autor.cedula}`;
    cedulaPara.style.cssText = paragraphStyle; // Aplicar estilos CSS

    const nombrePara = document.createElement('p');
    nombrePara.textContent = `Nombre: ${autor.nombre}`;
    nombrePara.style.cssText = paragraphStyle; // Aplicar estilos CSS

    const correoPara = document.createElement('p');
    correoPara.textContent = `Correo: ${autor.correo}`;
    correoPara.style.cssText = paragraphStyle; // Aplicar estilos CSS

    const imagen = document.createElement('img');
    imagen.src = autor.fotografia;
    imagen.alt = 'Fotografía del autor';


    // Agregar los elementos de texto al div
    autorInfoDiv.appendChild(cedulaPara);
    autorInfoDiv.appendChild(nombrePara);
    autorInfoDiv.appendChild(correoPara);
    
    // Agregar la imagen al div
    autorInfoDiv.appendChild(imagen);

    // Ajustar los estilos de la imagen según el ancho de la pantalla
    if (window.matchMedia("(max-width: 600px)").matches) {
        imagen.style.width = '100%'; // Ocupa todo el ancho disponible
        imagen.style.margin = '0'; // Sin márgenes
        imagen.style.display = 'block'; // Mostrar como bloque (por defecto para <img>)
        // Puedes agregar más estilos aquí según tus necesidades
    } else {
        imagen.style.cssText = 'width: 300px; height: auto; margin-left: auto; margin-right: auto; display: block;';
        // Puedes agregar más estilos aquí según tus necesidades
    }
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
