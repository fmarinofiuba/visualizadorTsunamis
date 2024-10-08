import * as THREE from "three";

function createTerrainMesh(zValues, numRows, numCols, cellSize = 1) {
  // Creamos la geometría de la malla
  const geometry = new THREE.BufferGeometry();

  // Calculamos la cantidad de vértices
  const vertices = [];
  const indices = [];

  // Recorremos las filas y columnas para definir los vértices
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const z = zValues[y * numCols + x]; // Calculamos la posición de Z en el array
      vertices.push(x * cellSize, y * cellSize, z);
    }
  }

  // Recorremos las filas y columnas para definir los índices de los triángulos
  for (let y = 0; y < numRows - 1; y++) {
    for (let x = 0; x < numCols - 1; x++) {
      const topLeft = y * numCols + x;
      const topRight = topLeft + 1;
      const bottomLeft = (y + 1) * numCols + x;
      const bottomRight = bottomLeft + 1;

      // Primer triángulo de la celda (top-left, bottom-left, top-right)
      indices.push(topLeft, bottomLeft, topRight);

      // Segundo triángulo de la celda (top-right, bottom-left, bottom-right)
      indices.push(topRight, bottomLeft, bottomRight);
    }
  }

  // Convertimos los arrays en BufferAttributes para la geometría
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setIndex(indices);

  // Calculamos las normales para la iluminación
  geometry.computeVertexNormals();

  // Creamos el material
  const material = new THREE.MeshStandardMaterial({
    color: 0x8b4513, // Color de terreno (marrón)
    wireframe: false, // Cambia a true si quieres ver el wireframe
  });

  // Creamos la malla
  const mesh = new THREE.Mesh(geometry, material);

  // Retornamos la malla
  return mesh;
}
