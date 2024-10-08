export class EventsDispatcher {
	_listeners;

	constructor() {
		this._listeners = Object.create(null);
	}

	/**
	 * Adds an event listener to this Acceleration Module.
	 * @param {string} type The name of the command.
	 * @param handler The handler for the cmomand. This is called whenever the command is received.
	 */
	addEventListener(type, handler, priority = 0) {
		if (!this._listeners) {
			this._listeners = Object.create(null);
		}
		if (!(type in this._listeners)) {
			this._listeners[type] = [{ handler, priority }];
		} else {
			var handlers = this._listeners[type];
			if (!handlers.some((listener) => listener.handler === handler)) {
				handlers.push({ handler, priority });
				// Sort handlers by priority (higher priority first)
				handlers.sort((a, b) => b.priority - a.priority);
			}
		}
	}

	/**
	 * Removes an event listener from this Acceleration Module.
	 * @param {string} type The name of the command.
	 * @param handler The handler for the cmomand. This is called whenever the command is received.
	 */
	removeEventListener(type, handler) {
		if (!this._listeners) {
			// No listeners
			return;
		}
		if (type in this._listeners) {
			var handlers = this._listeners[type];
			var index = handlers.findIndex((listener) => listener.handler === handler);
			if (index >= 0) {
				if (handlers.length == 1) {
					// Listeners list would be empty, delete it
					delete this._listeners[type];
				} else {
					// Remove the handler
					handlers.splice(index, 1);
				}
			}
		}
	}

	dispatchEvent(event) {
		if (!this._listeners) {
			return true;
		}
		var type = event.type;
		if (type in this._listeners) {
			// Make a copy to walk over
			var handlers = this._listeners[type].slice();
			for (var i = 0; i < handlers.length; i++) {
				var { handler } = handlers[i];
				if (handler.call(this, event) === false) {
					// If handler returns false, stop propagation
					break;
				}
			}
		}
	}
}
