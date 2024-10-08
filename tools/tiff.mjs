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

// Example usage
const values = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*
for (let i = 0; i < 16; i++) {
	if (i > 4) {
		values[i] = 100;
	} else {
		values[i] = 0;
	}
}
	*/
const metadata = {
	height: 4,
	width: 4,
	// You can add more metadata properties here as needed
	// For example:
	// noData: -9999,
	// samplesPerPixel: 1,
	BitsPerSample: [32],
	SampleFormat: [1], //
};

// Call the function to generate and save the TIFF
generateAndSaveTIFF(values, metadata, 'output.tiff')
	.then(() => console.log('Process completed.'))
	.catch((error) => console.error('An error occurred:', error));
