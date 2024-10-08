const fs = require('fs');
const path = require('path');

/**
 * Genera un archivo COLLADA (.dae) basado en un arreglo de alturas de una grilla.
 * @param {number[]} zValues - Arreglo con las alturas (valores z) de la grilla.
 * @param {number} gridWidth - El ancho de la grilla (es cuadrada, por lo que también será la altura).
 * @param {string} filePath - Ruta donde se guardará el archivo .dae.
 */

function generateCollada(zValues, gridWidth, gridHeight, filePath) {
	if (zValues.length !== gridWidth * gridHeight) {
		throw new Error('El tamaño del arreglo de alturas no coincide con el tamaño de la grilla.');
	}

	const vertices = [];
	const indices = [];

	// Generar los vértices (x, y, z)
	for (let y = 0; y < gridHeight; y++) {
		for (let x = 0; x < gridWidth; x++) {
			const z = zValues[y * gridWidth + x];
			vertices.push(x, y, z);
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
			indices.push(topLeft, bottomLeft, topRight);

			// Segundo triángulo (topRight, bottomLeft, bottomRight)
			indices.push(topRight, bottomLeft, bottomRight);
		}
	}

	// Crear el contenido XML del archivo COLLADA
	const colladaXml = `
    <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <COLLADA xmlns="http://www.collada.org/2005/11/COLLADASchema" version="1.4.1">
      <asset>
        <contributor>
          <authoring_tool>Custom JS Script</authoring_tool>
        </contributor>
        <created>${new Date().toISOString()}</created>
        <modified>${new Date().toISOString()}</modified>
        <unit name="meter" meter="1"/>
        <up_axis>Y_UP</up_axis>
      </asset>
      <library_geometries>
        <geometry id="grid" name="grid">
          <mesh>
            <source id="grid-positions">
              <float_array id="grid-positions-array" count="${vertices.length}">${vertices.join(' ')}</float_array>
              <technique_common>
                <accessor source="#grid-positions-array" count="${vertices.length / 3}" stride="3">
                  <param name="X" type="float"/>
                  <param name="Y" type="float"/>
                  <param name="Z" type="float"/>
                </accessor>
              </technique_common>
            </source>
            <vertices id="grid-vertices">
              <input semantic="POSITION" source="#grid-positions"/>
            </vertices>
            <triangles count="${indices.length / 3}">
              <input semantic="VERTEX" source="#grid-vertices" offset="0"/>
              <p>${indices.join(' ')}</p>
            </triangles>
          </mesh>
        </geometry>
      </library_geometries>
      <library_visual_scenes>
        <visual_scene id="Scene" name="Scene">
          <node id="grid-node" name="grid">
            <instance_geometry url="#grid"/>
          </node>
        </visual_scene>
      </library_visual_scenes>
      <scene>
        <instance_visual_scene url="#Scene"/>
      </scene>
    </COLLADA>
    `;

	// Guardar el archivo COLLADA en el disco
	fs.writeFileSync(filePath, colladaXml);
}

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
	for (let line of lines) {
		const parts = line.split(';');
		if (parts.length === 3 && parts[1] && parts[2]) {
			const x = parseFloat(parts[0].replace(',', '.'));
			const y = parseFloat(parts[1].replace(',', '.'));
			let z = parseFloat(parts[2].replace(',', '.'));

			//if (c > 80) z = 1;
			//console.log(' z', z);

			xValues.add(x);
			yValues.add(y);
			zValues.push(z);
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
		r: r,
		i: i,
		allBlocksSameSize: allBlocksSameSize,
		//blockSizes: blockSizes,
	};
}

// Función para probar el código
function main() {
	const gridWidth = 10; // Ancho de la grilla
	const inputFilePath = path.join(__dirname, 'samples2.csv');
	const outputFilePath = path.join(__dirname, 'output.dae');

	const res = loadCSV(inputFilePath, 221, 158);

	console.log(res);

	generateCollada(res.zValues, 221, 158, outputFilePath);
}

main();
