import * as THREE from 'three';

// Esta funcion recibe los siguientes parametros:
// width: Ancho del plano
// height: Alto del plano
// amplitude: Amplitud de la elevacion
// columns: Numero de segmentos en el ancho
// rows: Numero de segmentos en el alto
// texture: Textura que se usara para la elevacion
// La funcion devuelve una geometria de Three.js

export function ElevationGeometry(width, height, amplitude, columns, rows, zValues) {
	let geometry = new THREE.BufferGeometry();

	const positions = [];
	const indices = [];
	const normals = [];
	const uvs = [];

	const quadsPerRow = columns - 1;

	// Recorremos los segmentos horizontales y verticales
	for (let j = 0; j < rows - 1; j++) {
		for (let i = 0; i < columns - 1; i++) {
			// Obtenemos los valores de los píxeles de los puntos adyacentes
			let xPrev = undefined;
			let xNext = undefined;
			let yPrev = undefined;
			let yNext = undefined;

			// Obtenemos el valor del pixel en la posicion i, j
			let z0 = zValues[(i + j * columns) * 1];

			z0 = 0;

			// Obtenemos los valores de los píxeles adyacentes
			xPrev = i > 0 ? zValues[(i - 1 + j * columns) * 4] / 255 : undefined;
			xNext = i < columns - 1 ? (xNext = zValues[(i + 1 + j * columns) * 4] / 255) : undefined;

			yPrev = j > 0 ? zValues[(i + (j - 1) * columns) * 4] / 255 : undefined;
			yNext = j < rows - 1 ? zValues[(i + (j + 1) * columns) * 4] / 255 : undefined;

			// calculamos la diferencia entre los valores de los píxeles adyacentes
			// en el ejex y en el eje y de la imagen (en el espacio de la textura
			// Ojo no confundir con el espacio 3D del modelo 3D donde Y es la altura)

			let deltaX;
			if (xPrev == undefined) {
				deltaX = xNext - z0;
			} else if (yNext == undefined) {
				deltaX = xPrev - z0;
			} else {
				deltaX = (xNext - xPrev) / 2;
			}

			let deltaY;
			if (yPrev == undefined) {
				deltaY = yNext - z0;
			} else if (yNext == undefined) {
				deltaY = yPrev - z0;
			} else {
				deltaY = (yNext - yPrev) / 2;
			}

			// Calculamos la altura del punto en el espacio 3D
			const z = amplitude * z0;

			// Añadimos los valores de los puntos al array de posiciones
			positions.push((width * i) / columns - width / 2);
			positions.push(z);
			positions.push((height * j) / rows - height / 2);

			// Calculamos los vectores tangentes a la superficie en el ejex y en el eje y
			let tanX = new THREE.Vector3(width / columns, deltaX * amplitude, 0).normalize();
			let tanY = new THREE.Vector3(0, deltaY * amplitude, height / rows).normalize();
			// Calculamos el vector normal a la superficie
			let n = new THREE.Vector3();
			n.crossVectors(tanY, tanX);

			// Añadimos los valores de los vectores normales al array de normales
			normals.push(n.x);
			normals.push(n.y);
			normals.push(n.z);

			uvs.push(i / (columns - 1));
			uvs.push(j / (rows - 1));

			if (i == columns - 2 || j == rows - 2) continue;

			//Ensamblamos los triangulos

			indices.push(i + j * quadsPerRow);
			indices.push(i + 1 + (j + 1) * quadsPerRow);
			indices.push(i + 1 + j * quadsPerRow);

			indices.push(i + j * quadsPerRow);
			indices.push(i + (j + 1) * quadsPerRow);
			indices.push(i + 1 + (j + 1) * quadsPerRow);
		}
	}

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
	geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
	geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
	geometry.setIndex(indices);

	return geometry;
}
