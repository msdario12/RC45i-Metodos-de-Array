for (let i = 0; i <= 20; i++) {
	const res = Math.pow(i, 2);
	document.write(`${i} ^ 2 = ${res} <br>`);
}

// Ejercicio de edad con while
let edad = parseInt(prompt("Ingrese la edad"));

while (!(edad > 5) || !(edad < 130)) {
	// Aca mantenemos atrapado al usuario mientras no se cumpla la condicion

	// Volver a preguntar la edad al usuario
	console.warn("La edad ingresada es incorrecta");
	edad = parseInt(prompt("Ingrese la edad eerrar"));
}
console.info("Salio del ciclo");
