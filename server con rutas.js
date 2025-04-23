// Servidor con rutas
// 1. importar el modulo http de node.js
const http = require('node:http')
// 2. importar el modulo url de node.js
const url = require('node:url')
// 3. definir el puerto
const PORT = 3000
// 4. crear el servidor
const server = http.createServer((req, res) => {
  // 5. obtener la url de la peticion
  const { pathname } = url.parse(req.url, true)
  // 6. definir el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // 7. enviar la respuesta segun la ruta
  switch (pathname) {
    case '/':
      res.end('Hola Mundo desde Node.js\n')
      break
    case '/saludo':
      res.end('Hola desde la ruta /saludo\n')
      break
    case '/despedida':
      res.end('Adios desde la ruta /despedida\n')
      break
    default:
      res.end('Ruta no encontrada\n')
      break
  }
})
// 8. hacer que el servidor escuche en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`)
  // como finalizar ejecucion del servidor
  console.log('Presiona Ctrl + C para finalizar la ejecucion del servidor')
})
