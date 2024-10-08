import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { SceneManager } from './sceneManager.js';
import * as UIL from './vendor/uil.module.js';

import { EventTypes as SMEventTypes } from './sceneManager.js';
import { AnimationManager, EventTypes as AMEventTypes } from './animationManager.js';
import { Display } from './display.js';

let scene, camera, renderer, container, sceneManager;
let ui;
let display;

let animationManager;
let menuparams = {
	fpsItem: 3,
	topColor: [1, 0, 0, 1],
	bottomColor: [0, 1, 0, 1],
};

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer({
		logarithmicDepthBuffer: true,
	});
	renderer.setClearColor(new THREE.Color('#ffffff'));
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
	camera.position.set(2000, 1300, 0);
	camera.lookAt(0, 0, 0);

	const controls = new OrbitControls(camera, renderer.domElement);

	window.addEventListener('resize', onResize);
	onResize();
}

function onResize() {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	sceneManager.animate();
	renderer.render(scene, camera);
}

function init() {
	display = new Display();
	animationManager = new AnimationManager();
	animationManager.addEventListener(AMEventTypes.ON_INIT_COMPLETE, () => {
		start();
	});

	sceneManager = new SceneManager(scene);
	sceneManager.addEventListener(SMEventTypes.ON_SCENE_LOADED, () => {
		animationManager.init(sceneManager, display);
	});
}

function buildUI() {
	const container3D = document.getElementById('dummy');
	ui = new UIL.Gui({ w: 128 * 4, addDOMEventListeners: true, parent: container3D });
	let gTerreno = ui.add('group', { name: 'Terreno', bg: '#446666' });
	gTerreno.open();
	/*
	gTerreno.add(sceneManager, 'terrainMode', {
		type: 'list',
		list: ['mode1', 'mode2'],
	});*/

	//gTerreno.add(sceneManager, 'topColor', { name: 'Color', type: 'color' });

	gTerreno.add(sceneManager, 'verticalScale', {
		type: 'slide',
		displayName: 'escala vertical',
		min: 1,
		max: 10,
		step: 1,
		value: 2,
	});

	gTerreno.add(sceneManager, 'curveSeparation', {
		type: 'slide',
		displayName: 'delta curva nivel',
		min: 0.1,
		max: 10,
		step: 0.01,
		value: 1,
	});

	gTerreno.add(sceneManager, 'curveThickness', {
		type: 'slide',
		displayName: 'grosor curva nivel',
		min: 0.05,
		max: 1,
		step: 0.01,
		value: 1,
	});

	gTerreno.add(sceneManager, 'curveIntensity', {
		type: 'slide',
		displayName: 'intensidad curva nivel',
		min: 0.0,
		max: 1,
		step: 0.01,
		value: 1,
	});

	let gAgua = ui.add('group', { name: 'Agua', bg: '#664466' });
	gAgua.open();
	gAgua.add(sceneManager, 'waterLevel', {
		type: 'slide',
		displayName: 'nivel del agua',
		min: -40,
		max: 20,
		step: 0.01,
		value: 2,
	});
	gAgua
		.add(animationManager, 'currentSerie', {
			type: 'list',
			displayName: 'Serie',
			list: ['Original+HAT', 'Original+HAT+ODT', 'Original'],
		})
		.onChange((which) => {
			switch (which) {
				case 'Original+HAT':
					animationManager.currentSerie = 0;
					break;
				case 'Original+HAT+ODT':
					animationManager.currentSerie = 1;
					break;
				case 'Original':
					animationManager.currentSerie = 2;
					break;
			}
		});
	gAgua
		.add(animationManager, 'frame', {
			type: 'slide',
			displayName: 'frame',
			min: 0,
			max: animationManager.getTotalFrames(),
			step: 1,
			value: 0,
		})
		.listen();
	gAgua.add('button', {
		name: 'control',
		value: ['|<', '<', 'play/pause', '>', '>|'],
		callback: (which) => {
			switch (which) {
				case '|<':
					animationManager.gotoFirstFrame();
					break;
				case '<':
					animationManager.gotoPreviousFrame();
					break;
				case 'play/pause':
					animationManager.togglePlay();
					break;
				case '>':
					animationManager.gotoNextFrame();
					break;
				case '>|':
					animationManager.gotoLastFrame();
					break;
			}
		},
	});

	const options = ['1', '2', '5', '10', '20', '30'];
	menuparams.fpsItem = 3;

	animationManager.fps = options[menuparams.fpsItem];

	gAgua
		.add(menuparams, 'fpsItem', {
			type: 'list',
			displayName: 'Cuadros/segundo',
			list: options,
		})
		.onChange((v) => {
			animationManager.fps = parseInt(v);
		});

	gAgua.add(sceneManager, 'aguaVisible', {
		type: 'boolean',
		displayName: 'Mostrar agua',
	});

	//let gAnimacion = ui.add('group', { name: 'Animacion', bg: '#666644' });
}

function start() {
	buildUI();
	animate();
}

setupThreeJs();
init();
