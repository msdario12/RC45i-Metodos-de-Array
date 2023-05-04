// const producto1 = 346.56;
// const producto2 = 596.3;
// const producto3 = 1860.4;
// const dolar = 470;
// const iva = 1.21;
// const ganancia = 1.35;
// const interesDeFinanciacion = 1.4;

// const precioFinalContado = producto1 * dolar * iva * ganancia;
// const precioFinalFinanciado = precioFinalContado * interesDeFinanciacion;
// const precioCuota = Math.ceil(precioFinalFinanciado/12)

function calcularPerimetro(r) {
	const perimetro = Math.PI * r;
	console.log('Perimetro', perimetro);
}

function mostrarPrecio(
	producto,
	dolar,
	iva,
	ganancia,
	interesFinanciacion,
	numCuotas = 12
) {
	const precioFinalContado = producto * dolar * iva * ganancia;
	const precioFinalFinanciado = precioFinalContado * interesFinanciacion;
	const precioCuota = +(precioFinalFinanciado / numCuotas).toFixed(2);

	document.write(
		`<p><strong>PRECIO CONTADO: </strong> $ ${precioFinalContado}</p>`
	);
	document.write(
		`<p><strong>${numCuotas} cuotas de $ ${precioCuota}</strong> </p>`
	);
	document.write(
		`<p><small>PRECIO LISTA: </small>$ ${precioFinalFinanciado}</p>`
	);
}

mostrarPrecio(100, 422, 1.21, 1.35, 1.4, 12);
