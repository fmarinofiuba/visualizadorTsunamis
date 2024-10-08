async function createGeoTIFF(data, width, height, outputPath) {
	const tiffWriter = GeoTIFF.write({
		fileDirectory: {
			ImageWidth: width,
			ImageLength: height,
			BitsPerSample: [8],
			Compression: 1,
			PhotometricInterpretation: 1, // 1 para blanco y negro
			SamplesPerPixel: 1,
			PlanarConfiguration: 1,
		},
		data: [data], // Los datos de la imagen
		tiePoints: [0, 0, 0, 0, 0, 0], // Necesario para el GeoTIFF (ubicación espacial)
	});

	// Guardar el archivo en el sistema de archivos
	fs.writeFileSync(outputPath, Buffer.from(tiffWriter));
}

/**
 * Función para generar un array con un círculo blanco en el centro.
 * @param {number} resolution - La resolución de la imagen cuadrada.
 * @returns {Uint8Array} Un array de valores para la imagen (0 es negro, 255 es blanco).
 */
function generateTestData(resolution) {
	const data = new Uint16Array(resolution * resolution);
	const center = Math.floor(resolution / 2);
	const radius = Math.floor(resolution / 4);

	for (let y = 0; y < resolution; y++) {
		for (let x = 0; x < resolution; x++) {
			const dx = x - center;
			const dy = y - center;
			const distance = Math.sqrt(dx * dx + dy * dy);

			// Si el píxel está dentro del círculo, lo hacemos blanco (255)
			if (distance <= radius) {
				data[y * resolution + x] = 255; // Blanco
			} else {
				data[y * resolution + x] = 0; // Negro
			}
		}
	}

	return data;
}

import GeoTIFF, { writeArrayBuffer } from 'geotiff';
import fs from 'fs/promises';

async function generateAndSaveTIFF(values, metadata, filename) {
	try {
		// Generate the TIFF array buffer
		const arrayBuffer = await writeArrayBuffer(values, metadata);

		// Write the array buffer to a file
		await fs.writeFile(filename, Buffer.from(arrayBuffer));

		console.log(`File ${filename} has been saved successfully.`);
	} catch (error) {
		console.error('Error generating or saving the TIFF file:', error);
	}
}

const width = 32;
const height = 32;

const testData = generateTestData(width);

const metadata = {
	ImageWidth: width,
	ImageLength: height,
	BitsPerSample: [16],
	//Compression: 1,
	PhotometricInterpretation: 1, // 1 para blanco y negro
	SamplesPerPixel: 1,
	SampleFormat: [1], //
	PlanarConfiguration: 1,
};

// Call the function to generate and save the TIFF
generateAndSaveTIFF(testData, metadata, 'output.tiff')
	.then(() => console.log('Process completed.'))
	.catch((error) => console.error('An error occurred:', error));
