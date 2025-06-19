/**
 * Suma dos números y retorna el resultado
 * @param {number} a - Primer número a sumar
 * @param {number} b - Segundo número a sumar
 * @returns {number} La suma de los dos números
 * @throws {Error} Si los parámetros no son números válidos
 */

function sumar(a, b) {
    // Validamos que los parámetros sean números
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }

    // Validamos que no sean NaN
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Los parámetros no pueden ser NaN');
    }

    // Realizamos la suma
    return a + b;
}

// Pruebas de la función
try {
    console.log('Prueba 1:', sumar(2, 3));      // 5
    console.log('Prueba 2:', sumar(-1, 5));     // 4
    console.log('Prueba 3:', sumar(2.5, 3.7));  // 6.2
    console.log('Prueba 4:', sumar(0, 0));      // 0
    
    // Pruebas de error
    try {
        sumar('2', 3);  // Debería lanzar error
    } catch (error) {
        console.log('Prueba de validación 1 (éxito):', error.message);
    }

    try {
        sumar(NaN, 5);  // Debería lanzar error
    } catch (error) {
        console.log('Prueba de validación 2 (éxito):', error.message);
    }

} catch (error) {
    console.error('Error en las pruebas:', error.message);
}

// Exportamos la función para poder usarla en otros archivos
module.exports = sumar; 