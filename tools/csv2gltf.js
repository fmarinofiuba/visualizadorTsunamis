const fs = require('fs');
const path = require('path');

// Función para cargar y procesar el archivo CSV
function loadCSV(filePath) {
	const data = fs.readFileSync(filePath, 'utf8');
	const lines = data.split('\n');

	let xValues = new Set();
	let yValues = new Set();
	let zValues = [];

	let blockSizes = [];
	let currentBlockSize = 0;
	let i = 0;
	let c = 0;
	let r = 0;

	let minX = Infinity;
	let maxX = -Infinity;
	let minY = Infinity;
	let maxY = -Infinity;
	let minZ = Infinity;
	let maxZ = -Infinity;

	for (let line of lines) {
		const parts = line.split(';');
		if (parts.length === 3 && parts[1] != '' && parts[2] != '') {
			const x = parseFloat(parts[0].replace(',', '.'));
			const y = parseFloat(parts[1].replace(',', '.'));
			let z = parseFloat(parts[2].replace(',', '.'));

			//if (c > 80) z = 1;
			//console.log(' z', z);

			xValues.add(x);
			yValues.add(y);
			zValues.push(z);

			// get max and min of x and y
			if (x < minX) minX = x;
			if (x > maxX) maxX = x;
			if (y < minY) minY = y;
			if (y > maxY) maxY = y;
			if (z < minZ) minZ = z;
			if (z > maxZ) maxZ = z;

			i++;

			c++;

			currentBlockSize++;
		} else {
			// Si se está cerrando un bloque, guardamos su tamaño
			if (currentBlockSize > 0) {
				blockSizes.push(currentBlockSize);
				//console.log('line ' + i + ' currentBlockSize:' + currentBlockSize);
				currentBlockSize = 0;
				c = 0;
				r++;
			}
		}
	}

	// Guardamos el último bloque si no fue cerrado por una fila inválida
	if (currentBlockSize > 0) {
		blockSizes.push(currentBlockSize);
	}

	// Verificamos si todos los bloques tienen el mismo tamaño
	const allBlocksSameSize = blockSizes.every((size) => size === blockSizes[0]);

	const numCols = blockSizes[0];
	const numRows = zValues.length / numCols;

	return {
		numRows: numRows,
		numCols: numCols,
		zValues: zValues,
		minX: minX,
		minY: minY,
		maxX: maxX,
		maxY: maxY,
		minZ: minZ,
		maxZ: maxZ,
		r: r,
		i: i,
		allBlocksSameSize: allBlocksSameSize,
		//blockSizes: blockSizes,
	};
}

/**
 * Genera un arreglo de zValues donde la altura es proporcional a la distancia al centro.
 * @param {number} width - El ancho de la grilla.
 * @param {number} height - El alto de la grilla.
 * @param {number} maxHeight - La altura máxima en el centro de la grilla.
 * @returns {number[]} Arreglo de zValues.
 */
function generateZValues(width, height, maxHeight) {
	const zValues = [];
	const centerX = width / 2;
	const centerY = height / 2;
	const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY); // Distancia máxima desde el centro

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			// Calcular la distancia del punto (x, y) al centro (centerX, centerY)
			const distanceToCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
			// Calcular la altura proporcional a la distancia (inversamente proporcional)
			const heightValue = maxHeight * Math.sin((10 * distanceToCenter) / maxDistance);
			zValues.push(heightValue); // Asegurarse de que las alturas sean >= 0
		}
	}

	return zValues;
}

/**
 * Genera un archivo glTF basado en un arreglo de alturas de una grilla.
 * @param {number[]} zValues - Arreglo con las alturas (valores z) de la grilla.
 * @param {number} gridWidth - El ancho de la grilla (es cuadrada, por lo que también será la altura).
 * @param {string} filePath - Ruta donde se guardará el archivo glTF.
 */
function generateGLTF(zValues, gridWidth, gridHeight, filePath, width, height) {
	if (zValues.length !== gridWidth * gridHeight) {
		throw new Error('El tamaño del arreglo de alturas no coincide con el tamaño de la grilla.');
	}

	const vertices = [];
	const indices = [];

	const scale = 0.01;
	// Generar los vértices (x, y, z)
	for (let y = 0; y < gridHeight; y++) {
		for (let x = 0; x < gridWidth; x++) {
			const z = zValues[y * gridWidth + x] * scale;
			let xx = (0.5 - x / gridWidth) * width * scale;
			let yy = (-0.5 + y / gridHeight) * height * scale;
			vertices.push(xx, z, yy);
		}
	}

	// Generar los triángulos (conectando los puntos de la grilla)
	for (let y = 0; y < gridHeight - 1; y++) {
		for (let x = 0; x < gridWidth - 1; x++) {
			const topLeft = y * gridWidth + x;
			const topRight = topLeft + 1;
			const bottomLeft = (y + 1) * gridWidth + x;
			const bottomRight = bottomLeft + 1;

			// Primer triángulo (topLeft, bottomLeft, topRight)
			indices.push(topLeft, topRight, bottomLeft);

			// Segundo triángulo (topRight, bottomLeft, bottomRight)
			indices.push(topRight, bottomRight, bottomLeft);
		}
	}

	// Convertir los datos de vertices e indices a buffers binarios
	const vertexBuffer = new Float32Array(vertices);
	const indexBuffer = new Uint16Array(indices);

	// Crear el archivo binario (.bin)
	const binFilePath = filePath.replace('.gltf', '.bin');
	const binData = Buffer.concat([Buffer.from(vertexBuffer.buffer), Buffer.from(indexBuffer.buffer)]);
	fs.writeFileSync(binFilePath, binData);

	// Crear el archivo JSON glTF
	const gltf = {
		asset: {
			version: '2.0',
			generator: 'generateGLTF',
		},
		buffers: [
			{
				uri: path.basename(binFilePath),
				byteLength: binData.byteLength,
			},
		],
		bufferViews: [
			{
				buffer: 0,
				byteOffset: 0,
				byteLength: vertexBuffer.byteLength,
				target: 34962, // ARRAY_BUFFER
			},
			{
				buffer: 0,
				byteOffset: vertexBuffer.byteLength,
				byteLength: indexBuffer.byteLength,
				target: 34963, // ELEMENT_ARRAY_BUFFER
			},
		],
		accessors: [
			{
				bufferView: 0,
				byteOffset: 0,
				componentType: 5126, // FLOAT
				count: vertexBuffer.length / 3,
				type: 'VEC3',
				min: [0, 0, Math.min(...zValues)],
				max: [gridWidth - 1, gridHeight - 1, Math.max(...zValues)],
			},
			{
				bufferView: 1,
				byteOffset: 0,
				componentType: 5123, // UNSIGNED_SHORT
				count: indexBuffer.length,
				type: 'SCALAR',
			},
		],
		meshes: [
			{
				primitives: [
					{
						attributes: {
							POSITION: 0,
						},
						indices: 1,
						mode: 4, // TRIANGLES
					},
				],
			},
		],
		nodes: [
			{
				mesh: 0,
			},
		],
		scenes: [
			{
				nodes: [0],
			},
		],
		scene: 0,
	};

	// Guardar el archivo glTF
	fs.writeFileSync(filePath, JSON.stringify(gltf, null, 2));
}

const gridWidth = 100; // Ancho de la grilla
const gridHeight = 100; // Alto de la grilla

const zValues = generateZValues(gridWidth, gridHeight, 10);
//console.log(zValues); // Muestra el arreglo generado

const inputFilePath = path.join(__dirname, 'elevacion.csv');

// Cargar y procesar el archivo CSV
const result = loadCSV(inputFilePath);

console.log('Result:', result); // Muestra el resultado del procesamiento del archivo CSV

let aspect = (result.maxX - result.minX) / (result.maxY - result.minY);
let width = 1436; //1756;
let height = 1756; //1436;
console.log('Aspect:', aspect, 'Width:', width, 'Height:', height); // Muestra los valores de ancho y alto
generateGLTF(result.zValues, result.numCols, result.numRows, 'output.gltf', width, height);
