export class EventService {

    constructor() {
        this.listeners = {};
    }

    addListener(uId, eventName, listener, amount = -1) {
        if(!this.listeners.hasOwnProperty(eventName)) {
            this.listeners[eventName] = {};
        }

        this.listeners[eventName][uId] = {
            id: uId,
            amount: amount,
            callback: listener
        };
    }

    removeListener(eventName = '', listener = null) {
        if(!!eventName && this.listeners.hasOwnProperty(eventName)) {
            if(!!listener){
                for (let id in this.listeners[eventName]) {
                    if(this.listeners[eventName][id]['callback'] === listener) {
                        delete this.listeners[eventName][id];
                    }
                }
                return;
            }
            delete this.listeners[eventName];
            return;
        }

        for (let key in this.listeners) {
            delete this.listeners[key];
        }
    }

    unregisterComponent(uId) {
        for (let event in this.listeners) {
            for (let id in this.listeners[event]) {
                if(parseInt(id) === parseInt(uId)) {
                    delete this.listeners[event][id];
                }
            }
        }
    }

    emit(eventName, params = {}) {
        if(this.listeners.hasOwnProperty(eventName)) {
            Object.keys(this.listeners[eventName]).forEach(id => {
                if(this.listeners[eventName][id]['amount'] === 0) {
                    delete this.listeners[eventName][id];
                    return;
                }

                this.listeners[eventName][id]['callback'](params);

                if(this.listeners[eventName][id]['amount'] > 0) {
                    this.listeners[eventName][id]['amount'] -= 1;
                }
            })
        }
    }
}
