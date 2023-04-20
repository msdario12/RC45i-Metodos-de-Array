console.log("Bucle While");
let i = 0;
while (i <= 10) {
	// console.log(`El numero es ${i}`);
	i++;
}

// Usando recursividad
const recur = (n) => {
	if (n > 10) {
		return 0;
	}
	// console.log("recur", n);
	recur(n + 1);
};

recur(1);

// Problema, mostrar por consola la tabla de un numero hasta el 10

// const num = +prompt('Ingrese un numero')

// let j = 0
// const cont = document.getElementById('num')

// while (j <= 10) {
//     console.log(`${num}x${j}=${num*j}`)
//     const el = document.createElement('p')
//     el.innerHTML = `${num}x${j}=${num*j}`;
//     cont.appendChild(el)
//     j++
// }

// Problema, devolver la suma del numero ingresado num=3 1+2+3=6
const num = prompt("Ingrese un numero");

let x = 1;
let sum = 0;

while (x <= num) {
	sum = sum + x;
	console.log(num, sum);
	x++;
}
