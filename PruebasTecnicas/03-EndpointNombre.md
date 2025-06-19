# Prueba Técnica: Endpoint con Nombre en JSON

## Descripción
Crear un servidor Express que exponga un endpoint que devuelva tu nombre en formato JSON.

## Objetivos
1. Crear un servidor web usando Express.js
2. Implementar un endpoint GET en la ruta '/nombre'
3. Devolver un objeto JSON con tu nombre
4. Configurar los headers de respuesta correctamente
5. Manejar errores básicos

## Requisitos
- Node.js instalado en tu sistema
- Express.js como framework web
- Conocimientos básicos de API REST
- Manejo de respuestas JSON

## Puntos a evaluar
- Correcta configuración del servidor Express
- Implementación adecuada del endpoint
- Formato correcto de la respuesta JSON
- Headers de respuesta apropiados
- Manejo básico de errores
- Buenas prácticas de código

## Ejemplo de respuesta esperada
```json
{
    "nombre": "Tu Nombre"
}
```

## Especificaciones técnicas
- Método HTTP: GET
- Ruta: /nombre
- Content-Type: application/json
- Status Code: 200 OK
- Puerto del servidor: 3000

## Pruebas sugeridas
1. Hacer una petición GET a http://localhost:3000/nombre
2. Verificar el Content-Type de la respuesta
3. Validar el formato JSON de la respuesta
4. Comprobar el manejo de rutas no existentes

## Consejos
- Usar el middleware express.json()
- Implementar manejo de errores con middleware
- Documentar el código adecuadamente
- Considerar el uso de variables de entorno para configuraciones

## Nivel de dificultad
🟢 Principiante

## Tiempo estimado
⏱️ 15-20 minutos 