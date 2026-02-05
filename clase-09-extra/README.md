# Clase 09 Extra

- **Variable** → guardar un dato
- **Condicional (`if`)** → decidir algo
- **Bucle (`for`)** → repetir algo
- **Función** → ordenar o reutilizar lógica
- **DOM** → mostrar / cambiar algo en la página
- **Evento** → esperar que el usuario haga algo
- **Objeto literales** → agrupar datos relacionados
- **Array** → agrupar datos similares

## Funciones

```js
// function saludar(nombre) {
//   return `Hola, ${nombre}!`;
// }

// const saludar = function (nombre) {
//   return `Hola, ${nombre}!`;
// }

const saludar = (nombre) => `Hola, ${nombre}!`;

console.log(saludar("Pedro"));
```

## Operador ternario

```js
const esMayor = personas[1].edad >= 18 ? "Si" : "No";
```
