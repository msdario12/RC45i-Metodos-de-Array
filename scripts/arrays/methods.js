const paisesLatinoamerica = [
	{
		nombre: 'Argentina',
		ubicacion: 'Sur de Sudamérica',
		habitantes: 45000000,
		capital: 'Buenos Aires',
	},
	{
		nombre: 'Bolivia',
		ubicacion: 'Centro de Sudamérica',
		habitantes: 11000000,
		capital: 'La Paz',
	},
	{
		nombre: 'Brasil',
		ubicacion: 'Este de Sudamérica',
		habitantes: 211000000,
		capital: 'Brasilia',
	},
	{
		nombre: 'Chile',
		ubicacion: 'Sur de Sudamérica',
		habitantes: 19000000,
		capital: 'Santiago',
	},
	{
		nombre: 'Colombia',
		ubicacion: 'Norte de Sudamérica',
		habitantes: 50340000,
		capital: 'Bogotá',
	},
	{
		nombre: 'Costa Rica',
		ubicacion: 'Centroamérica',
		habitantes: 5100000,
		capital: 'San José',
	},
	{
		nombre: 'Cuba',
		ubicacion: 'El Caribe',
		habitantes: 11400000,
		capital: 'La Habana',
	},
	{
		nombre: 'Ecuador',
		ubicacion: 'Oeste de Sudamérica',
		habitantes: 17300000,
		capital: 'Quito',
	},
	{
		nombre: 'El Salvador',
		ubicacion: 'Centroamérica',
		habitantes: 6500000,
		capital: 'San Salvador',
	},
	{
		nombre: 'Guatemala',
		ubicacion: 'Centroamérica',
		habitantes: 18200000,
		capital: 'Ciudad de Guatemala',
	},
	{
		nombre: 'Honduras',
		ubicacion: 'Centroamérica',
		habitantes: 10000000,
		capital: 'Tegucigalpa',
	},
	{
		nombre: 'México',
		ubicacion: 'Norte de América Central',
		habitantes: 128900000,
		capital: 'Ciudad de México',
	},
	{
		nombre: 'Nicaragua',
		ubicacion: 'Centroamérica',
		habitantes: 6400000,
		capital: 'Managua',
	},
	{
		nombre: 'Panamá',
		ubicacion: 'Centroamérica',
		habitantes: 4300000,
		capital: 'Ciudad de Panamá',
	},
	{
		nombre: 'Paraguay',
		ubicacion: 'Centro de Sudamérica',
		habitantes: 7200000,
		capital: 'Asunción',
	},
];

const copiaPaises = [...paisesLatinoamerica];

const tableBodyHTML = document.getElementById('tableBody');

function renderizarTabla(array) {
	tableBodyHTML.innerHTML = '';
	array.forEach((algo, index) => {
		const posicion = String(index + 1).padStart(2, '0');

		// document.write(`${posicion} - ${algo.nombre} <br>`)

		tableBodyHTML.innerHTML += `<tr>
                                        <th scope="row">${posicion}</th>
                                        <td>${algo.nombre}</td>
                                        <td>${algo.capital}</td>
                                        <td>${algo.habitantes}</td>
                                        <td>${algo.ubicacion}</td>
                                        <td>
										<button class="btn btn-primary" onclick="borrarPais(${index})">
										<i class="fa-solid fa-trash-can"></i>
										</button>
										</td>
                                    </tr>`;
	});
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numPares = numeros.filter((e) => e % 2 === 0);

console.log(numPares);

function filtrarPaises(valor) {
	const paisesFiltrados = paisesLatinoamerica.filter(
		(pais) => pais.habitantes > valor
	);
	renderizarTabla(paisesFiltrados);
}

function aplicarFiltroNombre(e) {
	console.log('change');
	const value = String(e.target.value).toUpperCase();
	// filtrarPaises(value);
	const paisesFiltrados = paisesLatinoamerica.filter((pais) =>
		pais.nombre.toUpperCase().includes(value)
	);
	renderizarTabla(paisesFiltrados);
}

renderizarTabla(paisesLatinoamerica);

// Splice, borrar elementos
function borrarPais(i) {
	console.log('Indice a borrar', i);
	paisesLatinoamerica.splice(i, 1);
	// Tenemos que volver a renderizar la tabla, sino cuando borremos el elemento en el array no vamos a reflejar el cambio en el navegador
	renderizarTabla(copiaPaises);
}
