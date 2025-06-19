/**
 * Determina si un número es par o impar
 * @param {number} numero - El número a evaluar
 * @returns {boolean} true si el número es par, false si es impar
 * @throws {Error} Si el parámetro no es un número entero válido
 */
function esPar(numero) {
    // Validar que sea un número
    if (typeof numero !== 'number') {
        throw new Error('El parámetro debe ser un número');
    }

    // Validar que no sea NaN
    if (isNaN(numero)) {
        throw new Error('El parámetro no puede ser NaN');
    }

    // Validar que sea un número entero
    if (!Number.isInteger(numero)) {
        throw new Error('El número debe ser un entero');
    }

    // Validar que no sea Infinity
    if (!Number.isFinite(numero)) {
        throw new Error('El número debe ser finito');
    }

    // Determinar si es par usando el operador módulo
    return numero % 2 === 0;
}

/**
 * Función auxiliar para ejecutar pruebas
 * @param {function} fn - Función a probar
 * @param {any} input - Valor de entrada
 * @param {any} expectedOutput - Valor esperado
 * @returns {boolean} true si la prueba pasa, false si falla
 */
function probarCaso(fn, input, expectedOutput) {
    try {
        const resultado = fn(input);
        const exitoso = resultado === expectedOutput;
        console.log(`Prueba con ${input}: ${exitoso ? '✅' : '❌'} ${resultado}`);
        return exitoso;
    } catch (error) {
        console.log(`Prueba con ${input}: ❌ Error: ${error.message}`);
        return false;
    }
}

// Ejecutar pruebas
console.log('=== Pruebas de números pares e impares ===');

// Casos básicos
probarCaso(esPar, 2, true);    // Par positivo
probarCaso(esPar, 3, false);   // Impar positivo
probarCaso(esPar, 0, true);    // Cero (par)
probarCaso(esPar, -4, true);   // Par negativo
probarCaso(esPar, -3, false);  // Impar negativo

// Casos de error
console.log('\n=== Pruebas de validación ===');
try {
    esPar(2.4);  // Número decimal
} catch (error) {
    console.log('Prueba con decimal: ✅ Error esperado:', error.message);
}

try {
    esPar('2');  // String
} catch (error) {
    console.log('Prueba con string: ✅ Error esperado:', error.message);
}

try {
    esPar(NaN);  // NaN
} catch (error) {
    console.log('Prueba con NaN: ✅ Error esperado:', error.message);
}

try {
    esPar(Infinity);  // Infinity
} catch (error) {
    console.log('Prueba con Infinity: ✅ Error esperado:', error.message);
}

// Exportar la función para uso en otros archivos
module.exports = esPar; 