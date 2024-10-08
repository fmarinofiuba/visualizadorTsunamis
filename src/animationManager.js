import { EventsDispatcher } from './eventsDispatcher';

export const EventTypes = {
	ON_INIT_COMPLETE: 'ON_INIT_COMPLETE',
};

export class AnimationManager extends EventsDispatcher {
	csvFile = 'data/series.csv'; // Ruta al archivo CSV
	series;
	sceneManager;
	display;

	_currentSerie = 0;
	currentFrame = 0;
	isPlaying = false;
	timer;
	_currentFPS = 1;

	seriesNames = ['Original + HAT', 'Original + HAT + ODT max', 'Original'];

	constructor() {
		super();
	}

	async init(sceneManager, display) {
		this.sceneManager = sceneManager;
		this.display = display;
		const response = await fetch(this.csvFile); // Cargar el archivo CSV
		const text = await response.text(); // Convertirlo a texto
		const rows = text.trim().split('\n'); // Dividir el contenido en filas

		const result = rows.map((row) => {
			// Dividir cada fila por el punto y coma ";"
			const [fecha, valor1, valor2, valor3] = row.split(';');

			// Convertir los valores a números reemplazando la coma decimal por punto
			return [
				fecha, // Fecha en formato string
				parseFloat(valor1.replace(',', '.')),
				parseFloat(valor2.replace(',', '.')),
				parseFloat(valor3.replace(',', '.')),
			];
		});
		console.log('AnimationManager initialized'); // Mensaje de inicialización exitosa
		this.series = result;
		this.dispatchEvent({ type: EventTypes.ON_INIT_COMPLETE, data: result });
	}

	set currentSerie(index) {
		// 0,1 o 2
		console.log('Current Serie:', index); // Imprimir el índice de la serie actual
		this._currentSerie = Math.max(0, Math.min(index, 2));

		this.gotoFrame(this.currentFrame);
	}

	get currentSerie() {
		return this._currentSerie;
	}

	gotoFrame(index) {
		this.currentFrame = index;
		this.sceneManager.waterLevel = this.series[this.currentFrame][1 + this._currentSerie];
		this.display.setText(
			'Serie:' + this.seriesNames[this._currentSerie] + ' - Time:' + this.series[this.currentFrame][0]
		);
	}

	gotoPreviousFrame() {
		if (this.currentFrame > 0) {
			this.currentFrame--;
			this.gotoFrame(this.currentFrame); // Actualizar la escena con el nuevo frame
		}
	}
	gotoNextFrame(loop) {
		if (this.currentFrame < this.series.length - 1) {
			this.currentFrame++;
			this.gotoFrame(this.currentFrame); // Actualizar la escena con el nuevo frame
		} else if (loop) {
			this.gotoFirstFrame();
		}
	}

	gotoFirstFrame() {
		this.currentFrame = 0;
		this.gotoFrame(this.currentFrame); // Actualizar la escena con el primer frame
	}

	gotoLastFrame() {
		this.currentFrame = this.series.length - 1;
		this.gotoFrame(this.currentFrame); // Actualizar la escena con el último frame
	}

	playAnimation() {
		console.log('playAnimation');
		clearInterval(this.timer); // Detener la animación actual si existe
		this.timer = setInterval(() => {
			this.gotoNextFrame(true);
		}, 1000 / this._currentFPS);
		this.isPlaying = true; // Actualizar el estado de reproducción
	}

	pauseAnimation() {
		clearInterval(this.timer);
		this.isPlaying = false;
	}

	togglePlay() {
		if (this.isPlaying) {
			this.pauseAnimation();
		} else {
			this.playAnimation();
		}
	}

	set frame(value) {
		this.gotoFrame(value);
	}

	get frame() {
		return this.currentFrame;
	}

	set fps(value) {
		this._currentFPS = parseInt(value);
		if (this.isPlaying) this.playAnimation();
	}

	get fps() {
		return this._currentFPS;
	}

	getTotalFrames() {
		return this.series.length - 1;
	}
}
