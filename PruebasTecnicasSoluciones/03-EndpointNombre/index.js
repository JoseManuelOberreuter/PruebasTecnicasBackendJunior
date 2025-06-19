/**
 * Servidor Express que expone un endpoint que devuelve un nombre en formato JSON
 * @requires express
 */

const express = require('express');
const app = express();

// Configuración de middlewares
app.use(express.json());

// Configuración del puerto
const PORT = process.env.PORT || 3000;

/**
 * Endpoint que devuelve el nombre en formato JSON
 * @route GET /nombre
 * @returns {Object} Objeto JSON con el nombre
 */
app.get('/nombre', (req, res) => {
    try {
        res.status(200).json({
            nombre: "Tu Nombre"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
});

/**
 * Middleware para manejar rutas no encontradas
 */
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

/**
 * Middleware para manejar errores
 */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Error interno del servidor"
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Prueba el endpoint en: http://localhost:${PORT}/nombre`);
});

/**
 * Para probar este endpoint puedes usar:
 * 
 * curl http://localhost:3000/nombre
 * 
 * O desde un navegador web visitar:
 * http://localhost:3000/nombre
 */ 