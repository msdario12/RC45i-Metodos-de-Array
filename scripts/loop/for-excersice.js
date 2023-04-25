const text =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias in delectus quisquam, magnam voluptatibus aut non sapiente similique aspernatur earum sunt sequi a quibusdam ullam, atque, dignissimos dolorum distinctio hic.";

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i])
// }

const input = prompt("Ingrese un texto");
document.write(input + "<br>");
const vocales = ["a", "e", "i", "o", "u"];
let vocalNumber = 0;

for (let i = String(input.length) - 1; i >= 0; i--) {
	document.write(input[i]);
	vocales.includes(input[i].toLowerCase()) && vocalNumber++;
}
document.write("<br>");
document.write("El numero de vocales es: " + vocalNumber + "<br>");
