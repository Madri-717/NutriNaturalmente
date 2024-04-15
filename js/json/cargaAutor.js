// Obtener referencia al div donde se mostrará la información
const autorInfoDiv = document.getElementById('autorInfo');

// Cargar el archivo JSON
fetch('js/json/autor.json')
  .then(response => response.json()) // Parsear la respuesta JSON
  .then(data => {
    // Acceder a la información del JSON
    const autor = data.autorHTML[0];
    
    // Crear elementos HTML para mostrar la información
  // Estilos CSS para centrar los párrafos de texto
const paragraphStyle = 'text-align: center;';

// Estilos CSS para la imagen
const imageStyle = 'width: 300px; height: auto; margin-left: auto; margin-right: auto; display: block;';
// Cambia los valores de ancho y alto según tus necesidades

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
imagen.style.cssText = imageStyle; // Aplicar estilos CSS

// Agregar los elementos al div
autorInfoDiv.appendChild(cedulaPara);
autorInfoDiv.appendChild(nombrePara);
autorInfoDiv.appendChild(correoPara);
autorInfoDiv.appendChild(imagen);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

