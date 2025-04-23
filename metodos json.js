const objetoJS = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  hobbies: ["futbol", "musica", "lectura"],
}

const objetoJSON = JSON.stringify(objetoJS, null, 2); // Convertir a JSON
console.log(objetoJSON); // Mostrar el objeto JSON en la consola

const objetoJS2 = JSON.parse(objetoJSON); // Convertir de JSON a objeto JS
console.log(objetoJS2); // Mostrar el objeto JS en la consola