export class EventService {

    constructor() {
        this.listeners = {};
    }

    listen(eventName, listener) {
        if(!this.listeners.hasOwnProperty(eventName)) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listener);
    }

    listenNTimes(eventName, listener, amount = 1) {

    }

    listenOnce(eventName, listener) {
        return this.listenNTimes(eventName, listener, 1);
    }

    detatch(eventName, listener) {

    }

    detachAll() {

    }

    emit(eventName, params = {}) {
        if(this.listeners.hasOwnProperty(eventName)) {
            let listeners = [...this.listeners[eventName]].reverse();

            listeners.forEach(listener => {
                listener(params);
            });
        }
    }
}
