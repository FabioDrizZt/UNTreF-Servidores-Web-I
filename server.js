// 1. importar el modulo http de node.js
const http = require('node:http')
// 2. definir el puerto
const PORT = 3000
// 3. crear el servidor
const server = http.createServer((req, res) => {
  // 4. definir el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // 5. enviar la respuesta
  res.end('Hola Mundo desde Node.js\n')
})
// 6. hacer que el servidor escuche en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`)
  // como finalizar ejecucion del servidor
  console.log('Presiona Ctrl + C para finalizar la ejecucion del servidor')
})
