import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import beginVertexChunk from './shaders/chunks/TerrainBeginVertexChunk.glsl';
import mapFragmentChunk from './shaders/chunks/TerrainMapFragmentChunk.glsl';
import { EventsDispatcher } from './eventsDispatcher.js';

export const EventTypes = {
	ON_SCENE_LOADED: 'ON_SCENE_LOADED',
};

export class SceneManager extends EventsDispatcher {
	terreno;
	agua;
	terrainMode = 1;

	texturesLibrary = {
		tierra: 'maps/tierra.jpg',
	};

	constructor(scene) {
		super();
		this.scene = scene;
		const light = new THREE.DirectionalLight(0xffffff, 4);

		light.position.set(-1, 1, 0);
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x666666);
		//scene.add(ambientLight);
		const hemiLight = new THREE.HemisphereLight(0xccccff, 0xff9944, 1);
		scene.add(hemiLight);

		const grid = new THREE.GridHelper(2000, 10);
		grid.position.y = -50;
		//scene.add(grid);

		const axes = new THREE.AxesHelper(3);
		scene.add(axes);

		this.loadTextures();
	}

	loadTextures() {
		const manager = new THREE.LoadingManager();

		manager.onLoad = () => {
			console.log('Texturas Cargadas', this.texturesLibrary);

			this.loadModels();
		};

		for (let key in this.texturesLibrary) {
			const textureLoader = new THREE.TextureLoader(manager);
			const texture = textureLoader.load(this.texturesLibrary[key]);
			this.texturesLibrary[key] = texture;
			console.log(texture);
		}
	}

	loadModels() {
		// load models/terreno.glb with GLTF loader and add to scene
		const loader = new GLTFLoader();
		loader.load('models/terreno.glb', (gltf) => {
			this.onModelLoaded(gltf);
		});
	}

	overloadTerrainMaterial() {
		const newMat = new THREE.MeshPhongMaterial({});

		newMat.color = new THREE.Color(0xffffff);
		newMat.map = this.texturesLibrary['tierra'];

		newMat.userData.levelCurveRange = { value: 1 };
		newMat.userData.levelCurveIntensity = { value: 0.2 };
		newMat.userData.levelCurveThickness = { value: 0.1 };
		newMat.userData.topColor = { value: new THREE.Color(0x995500) };
		newMat.userData.bottomColor = { value: new THREE.Color(0x009900) };

		// https://medium.com/@pailhead011/extending-three-js-materials-with-glsl-78ea7bbb9270
		newMat.onBeforeCompile = (shader) => {
			shader.uniforms.levelCurveRange = newMat.userData.levelCurveRange;
			shader.uniforms.levelCurveThickness = newMat.userData.levelCurveThickness;
			shader.uniforms.levelCurveIntensity = newMat.userData.levelCurveIntensity;

			shader.uniforms.topColor = newMat.userData.topColor;
			shader.uniforms.bottomColor = newMat.userData.bottomColor;
			shader.uniforms.mixFactor = newMat.userData.mixFactor;
			shader.uniforms.lowLevel = newMat.userData.lowLevel;
			shader.uniforms.highLevel = newMat.userData.highLevel;

			shader.vertexShader =
				`
				varying vec3 vWorldPos;
				varying vec3 vModelPos;
			` + shader.vertexShader;

			let txt = `
				varying vec3 vWorldPos;
				varying vec3 vModelPos;
				uniform float levelCurveRange;\n
				uniform float levelCurveThickness;\n
				uniform float levelCurveIntensity;\n

				uniform vec3 topColor;\n
				uniform vec3 bottomColor;\n

				uniform float mixFactor;\n
				uniform float lowLevel;\n
				uniform float highLevel;\n`;

			shader.fragmentShader = txt + shader.fragmentShader;

			shader.vertexShader = shader.vertexShader.replace(
				'#include <begin_vertex>',
				beginVertexChunk // with our own
			);

			shader.fragmentShader = shader.fragmentShader.replace(
				'#include <map_fragment>',
				mapFragmentChunk // with our own
			);
		};

		this.terreno.material = newMat;
	}

	onModelLoaded(gltf) {
		gltf.scene.traverse((child) => {
			// find mesh "agua" and set material to transparent
			if (child.name === 'area') this.area = child;
			if (child.name === 'agua') this.agua = child;
			if (child.name === 'terreno') this.terreno = child;
		});

		let mat = this.agua.material;
		mat.transparent = true;
		mat.opacity = 0.5; // set opacity to 50%
		mat.shininess = 100; // set shininess to high value
		mat.color = new THREE.Color(0x0099ff); // blue color for water

		this.scene.add(this.area);

		this.overloadTerrainMaterial();
		this.dispatchEvent({ type: EventTypes.ON_SCENE_LOADED });
	}

	set verticalScale(value) {
		this.area.scale.y = value;
	}

	set waterLevel(value) {
		//console.log('water level', value);
		this.agua.position.y = value;
	}
	set curveThickness(value) {
		this.terreno.material.userData.levelCurveThickness.value = value;
	}

	set curveSeparation(value) {
		this.terreno.material.userData.levelCurveRange.value = value; // set the uniform value for levelCurveSeparation
	}

	get curveSeparation() {
		return this.terreno.material.userData.levelCurveRange.value;
	}

	set curveIntensity(value) {
		this.terreno.material.userData.levelCurveIntensity.value = value; // set the uniform value for levelCurveSeparation
	}

	get curveIntensity() {
		return this.terreno.material.userData.levelCurveIntensity.value;
	}

	set terrainMode(mode) {
		this.terrainMode = mode; // set the terrain mode
	}

	get terrainMode() {
		return this.terrainMode; // get the terrain mode
	}

	set aguaVisible(visible) {
		if (this.agua) this.agua.visible = visible;
	}

	get aguaVisible() {
		if (this.agua) return this.agua.visible;
		else return false;
	}

	set topColor(color) {
		let c = this.terreno.material.userData.topColor.value;
	}

	get topColor() {
		// convert the THREE.js Color array of 4
		let c = this.terreno.material.userData.topColor.value;
		return [c.r, c.g, c.b, 1];
	}

	set bottomColor(color) {
		if (this.terreno) This.terreno.material.userData.bottomColor.value = color;
	}

	get bottomColor() {
		if (this.terreno) return this.terreno.material.userData.bottomColor.value;
		else return null;
	}

	animate() {}
}
