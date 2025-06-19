# Prueba Técnica: Determinar si un Número es Par o Impar

## Descripción
Crear una función que reciba un número como parámetro y determine si es par o impar.

## Objetivos
1. Crear una función llamada `esPar`
2. La función debe aceptar un número como parámetro
3. Retornar `true` si el número es par y `false` si es impar
4. Manejar diferentes tipos de entrada (enteros, decimales, negativos)
5. Implementar validaciones básicas

## Requisitos
- Node.js instalado en tu sistema
- Conocimientos básicos de funciones en JavaScript
- Comprensión del operador módulo (%)
- Manejo de tipos de datos numéricos

## Puntos a evaluar
- Correcta declaración y uso de funciones
- Manejo de parámetros
- Validación de tipos de datos
- Manejo de casos edge (0, negativos, decimales)
- Claridad y legibilidad del código
- Documentación del código

## Casos de prueba
```javascript
esPar(2)    // Debería retornar true
esPar(3)    // Debería retornar false
esPar(0)    // Debería retornar true
esPar(-4)   // Debería retornar true
esPar(-3)   // Debería retornar false
esPar(2.4)  // Debería lanzar error (no es entero)
```

## Consideraciones adicionales
- ¿Qué pasa si el input no es un número?
- ¿Cómo manejar números decimales?
- ¿Cómo manejar números muy grandes?
- ¿Qué pasa con el cero?

## Consejos
- Usar el operador módulo (%) para determinar si un número es par
- Verificar que el parámetro sea un número válido
- Considerar el uso de Math.floor() o Number.isInteger() para validaciones
- Documentar el código adecuadamente

## Nivel de dificultad
🟢 Principiante

## Tiempo estimado
⏱️ 10-15 minutos 