const fs = require('fs');
const path = require('path');

function generateGrayscaleBMP(redValues, width, height) {
	const headerSize = 54 + 14; // 54 bytes for header + 14 bytes for color masks
	const dataSize = width * height * 2; // 2 bytes per pixel
	const fileSize = headerSize + dataSize;
	const buffer = new ArrayBuffer(fileSize);
	const view = new DataView(buffer);

	// BMP Header
	view.setUint16(0, 0x4d42, true); // BM
	view.setUint32(2, fileSize, true);
	view.setUint32(10, headerSize, true); // Offset to pixel data

	// DIB Header
	view.setUint32(14, 40, true); // DIB header size
	view.setInt32(18, width, true);
	view.setInt32(22, height, true);
	view.setUint16(26, 1, true); // Color planes
	view.setUint16(28, 16, true); // Bits per pixel
	view.setUint32(30, 3, true); // BI_BITFIELDS compression
	view.setUint32(34, dataSize, true); // Image size
	view.setUint32(38, 2835, true); // Horizontal resolution (72 DPI)
	view.setUint32(42, 2835, true); // Vertical resolution (72 DPI)
	view.setUint32(46, 0, true); // Colors in color table
	view.setUint32(50, 0, true); // Important color count

	// Pixel format (5-6-5)
	view.setUint32(54, 0xf800, true); // Red mask
	view.setUint32(58, 0x07e0, true); // Green mask
	view.setUint32(62, 0x001f, true); // Blue mask

	// Pixel data
	let offset = headerSize;
	for (let i = 0; i < redValues.length; i++) {
		if (offset + 2 > fileSize) {
			console.warn(`Warning: Reached end of buffer. Processed ${i} out of ${redValues.length} pixels.`);
			break;
		}
		const gray = Math.min(255, Math.max(0, redValues[i])); // Ensure value is between 0 and 255
		const value = ((gray >> 3) << 11) | ((gray >> 2) << 5) | (gray >> 3); // Convert to 5-6-5 format
		view.setUint16(offset, value, true);
		offset += 2;
	}

	return new Blob([buffer], { type: 'image/bmp' });
}

function generateCircleTestData(size) {
	const data = new Array(size * size).fill(0); // Inicializa el array con negro (0)
	const center = Math.floor(size / 2);
	const radius = Math.floor(size * 0.4); // El radio será el 40% del tamaño de la imagen

	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			// Calcula la distancia desde el punto actual al centro
			const distance = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));

			// Si la distancia es menor o igual al radio, establece el píxel como blanco (255)
			if (distance <= radius) {
				//data[y * size + x] = 255;
			}
		}
	}

	return data;
}

// Ejemplo de uso:
const size = 200; // Tamaño de la imagen cuadrada
const testData = generateCircleTestData(size);

// Ahora puedes usar estos datos con la función generateGrayscaleBMP:
// const bmpBlob = generateGrayscaleBMP(testData, size, size);

// Ejemplo de uso:
const width = 100;
const height = 100;
const redValues = new Array(width * height).fill(0).map(() => Math.floor(Math.random() * 256));
const bmpBlob = generateGrayscaleBMP(redValues, width, height);

// Para guardar el archivo (en un entorno que lo permita, como Node.js):
// const fs = require('fs');
// fs.writeFileSync('grayscale.bmp', Buffer.from(await bmpBlob.arrayBuffer()));

// Función para cargar y procesar el archivo CSV
function loadCSV(filePath) {
	const data = fs.readFileSync(filePath, 'utf8');
	const lines = data.split('\n');

	let xValues = new Set();
	let yValues = new Set();
	let zValues = [];
	let invalidRowsCount = 0;
	let blockSizes = [];
	let currentBlockSize = 0;
	let i = 0;
	let c = 0;
	let r = 0;
	for (let line of lines) {
		const parts = line.split(';');
		if (parts.length === 3 && parts[1] && parts[2]) {
			const x = parseFloat(parts[0].replace(',', '.'));
			const y = parseFloat(parts[1].replace(',', '.'));
			let z = parseFloat(parts[2].replace(',', '.'));

			z = 0;
			//if (c > 80) z = 1;
			//console.log(' r,c,z', r, c, z);
			xValues.add(x);
			yValues.add(y);
			zValues.push(z);

			c++;

			currentBlockSize++;
		} else {
			invalidRowsCount++;

			// Si se está cerrando un bloque, guardamos su tamaño
			if (currentBlockSize > 0) {
				blockSizes.push(currentBlockSize);
				//console.log('line ' + i + ' currentBlockSize:' + currentBlockSize);
				currentBlockSize = 0;
				c = 0;
				r++;
			}
		}

		i++;
	}

	// Guardamos el último bloque si no fue cerrado por una fila inválida
	if (currentBlockSize > 0) {
		blockSizes.push(currentBlockSize);
	}

	const numRows = yValues.size;
	const numCols = xValues.size;

	// Verificamos si todos los bloques tienen el mismo tamaño
	const allBlocksSameSize = blockSizes.every((size) => size === blockSizes[0]);

	return {
		numRows: numRows,
		numCols: numCols,
		zValues: zValues,
		allBlocksSameSize: allBlocksSameSize,
		blockSizes: blockSizes,
	};
}

// Función para guardar el array de valores Z en un archivo binario
function saveZValuesAsBinary(zValues, outputFilePath) {
	const buffer = new Float32Array(zValues); // Convertimos el array a Float32Array
	fs.writeFileSync(outputFilePath, Buffer.from(buffer.buffer)); // Guardamos como binario
	console.log(`Valores de Z guardados en formato binario en: ${outputFilePath}`);
}

// Ruta al archivo CSV y al archivo de salida
const inputFilePath = path.join(__dirname, 'samples2.csv');
const outputFilePath = path.join(__dirname, 'z_values.bin');
/*
// Cargar y procesar el archivo CSV
const result = loadCSV(inputFilePath);

console.log(result);
// Guardar los valores de Z en un archivo binario
saveZValuesAsBinary(result.zValues, outputFilePath);

// Mostrar los resultados
console.log(`Número de filas (Y): ${result.numRows}`);
console.log(`Número de columnas (X): ${result.numCols}`);
*/

let data = generateCircleTestData(512);

let blob = generateGrayscaleBMP(data, 512, 512);
saveBMP('circle.bmp', bmpBlob);

const fsp = require('fs').promises;

async function saveBMP(filename, bmpBlob) {
	try {
		const arrayBuffer = await bmpBlob.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		await fsp.writeFile(filename, buffer);
		console.log(`Archivo ${filename} guardado exitosamente.`);
	} catch (error) {
		console.error('Error al guardar el archivo:', error);
	}
}
