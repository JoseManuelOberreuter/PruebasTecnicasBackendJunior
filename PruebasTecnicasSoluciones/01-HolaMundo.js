// Importamos el módulo HTTP nativo de Node.js
const http = require('http');

// Definimos el puerto donde escuchará nuestro servidor
const PORT = 3000;

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Configuramos el header de la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    
    // Verificamos que la ruta sea la principal
    if (req.url === '/') {
        // Enviamos la respuesta
        res.end('Hola Mundo');
    } else {
        // Si la ruta no es la principal, enviamos un 404
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página no encontrada');
    }
});

// Iniciamos el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 