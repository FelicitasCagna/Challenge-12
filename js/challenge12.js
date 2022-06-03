// Obtener la base y la altura de un triángulo, y el radio de un circulo. Mostrar en consola el área del triangulo y del círculo.

// Pista:
// - Área del triángulo: (base x altura) / 2
// - Área del círculo: pi x radio^2

let base = prompt('Dame la base de un triangulo')
let altura = prompt('Dame la altura de un triangulo');
let radio = prompt('Dame el radio del circulo');

let areaT = base*altura/2;
let areaC = 3*radio^2;
console.log(`El area del triangulo es ${areaT} y el area del circulo es ${areaC}`);