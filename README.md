# Servidores Web I - UNTREF

Este repositorio contiene ejemplos y ejercicios prácticos de la Diplomatura en Backend de la Universidad Nacional de Tres de Febrero (UNTREF).

## Estructura del repositorio

- `server.js`: Ejemplo básico de un servidor HTTP con Node.js que responde "Hola Mundo".
- `server con rutas.js`: Ejemplo de servidor HTTP que maneja diferentes rutas (`/`, `/saludo`, `/despedida`).
- `metodos json.js`: Ejemplo de uso de métodos de conversión entre objetos JavaScript y JSON (`JSON.stringify`, `JSON.parse`).
- `importacion y exportacion de funciones/`: Carpeta con ejemplos de importación y exportación de funciones en Node.js (CommonJS y ECMAScript Modules).

## Conceptos principales utilizados

### 1. Node.js y el módulo `http`
Node.js permite ejecutar JavaScript en el servidor. El módulo `http` permite crear servidores web básicos sin frameworks externos.

### 2. Ruteo básico
El archivo `server con rutas.js` muestra cómo analizar la URL de la petición y devolver diferentes respuestas según la ruta solicitada.

### 3. JSON en JavaScript
El archivo `metodos json.js` ejemplifica cómo convertir objetos JavaScript a JSON y viceversa, lo cual es fundamental para la comunicación entre cliente y servidor.

### 4. Importación y exportación de funciones
La carpeta `importacion y exportacion de funciones` contiene ejemplos de cómo modularizar el código en Node.js, usando tanto CommonJS (`require`/`module.exports`) como ECMAScript Modules (`import`/`export`).

## Cómo ejecutar los ejemplos

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Clona este repositorio o descarga los archivos.
3. Desde la terminal, navega hasta la carpeta del proyecto y ejecuta los archivos con:
   ```sh
   node nombre_del_archivo.js
   ```
   Por ejemplo:
   ```sh
   node server.js
   ```
4. Para detener un servidor, presiona `Ctrl + C` en la terminal.

## Recomendaciones
- Lee los comentarios en cada archivo para entender el paso a paso.
- Modifica y experimenta con los ejemplos para afianzar los conceptos.
