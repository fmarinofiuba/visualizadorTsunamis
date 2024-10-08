function generateRGBBMP16Bit(rgbValues, width, height) {
	const headerSize = 138; // BITMAPV5HEADER size
	const dataSize = width * height * 6; // 6 bytes per pixel (2 bytes per channel)
	const fileSize = headerSize + dataSize;
	const buffer = new ArrayBuffer(fileSize);
	const view = new DataView(buffer);

	// BMP Header
	view.setUint16(0, 0x4d42, true); // BM
	view.setUint32(2, fileSize, true);
	view.setUint32(10, headerSize, true); // Offset to pixel data

	// DIB Header (BITMAPV5HEADER)
	view.setUint32(14, 124, true); // DIB header size
	view.setInt32(18, width, true);
	view.setInt32(22, -height, true); // Negative height for top-down bitmap
	view.setUint16(26, 1, true); // Color planes
	view.setUint16(28, 48, true); // Bits per pixel (3 * 16 = 48)
	view.setUint32(30, 3, true); // BI_BITFIELDS compression
	view.setUint32(34, dataSize, true); // Image size
	view.setUint32(38, 11811, true); // Horizontal resolution (300 DPI)
	view.setUint32(42, 11811, true); // Vertical resolution (300 DPI)
	view.setUint32(46, 0, true); // Colors in color table
	view.setUint32(50, 0, true); // Important color count

	// Color space information
	view.setUint32(54, 0x73524742, true); // 'sRGB' in little endian
	// ... (omitting some color profile data for brevity)

	// Bit masks for 16-bit channels
	view.setUint32(54, 0x0000ffff, true); // Red mask
	view.setUint32(58, 0xffff0000, true); // Green mask
	view.setUint32(62, 0x0000ffff, true); // Blue mask
	view.setUint32(66, 0x00000000, true); // Alpha mask (unused)

	// LCS_WINDOWS_COLOR_SPACE
	view.setUint32(70, 0x57696e20, true); // 'Win ' in little endian

	// Pixel data
	let offset = headerSize;
	for (let i = 0; i < rgbValues.length; i += 3) {
		const r = rgbValues[i];
		const g = rgbValues[i + 1];
		const b = rgbValues[i + 2];

		view.setUint16(offset, r, true); // Red
		view.setUint16(offset + 2, g, true); // Green
		view.setUint16(offset + 4, b, true); // Blue
		offset += 6;
	}

	return new Blob([buffer], { type: 'image/bmp' });
}

// Ejemplo de uso:
function generateRGBTestData(width, height) {
	const data = new Array(width * height * 3);
	for (let i = 0; i < data.length; i += 3) {
		let c = Math.floor(i % width);
		data[i] = 0; //Math.floor(Math.random() * 256); // R
		data[i + 1] = c; //Math.floor(Math.random() * 256); // G
		data[i + 2] = 0; //Math.floor(Math.random() * 256); // B
	}
	return data;
}

const width = 256;
const height = 256;
const rgbData = generateRGBTestData(width, height);
const bmpBlob = generateRGBBMP16Bit(rgbData, width, height);

saveBMP('sample.bmp', bmpBlob);

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
