// Need to declare static vars here, cause you cant export classes with static vars..
const listeners =  {};

export class EventService {

    addListener(eventName, listener, amount = -1) {
        if(!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = {};
        }

        listeners[eventName][this._uid] = {
            id: this._uid,
            amount: amount,
            callback: listener
        };
    }

    removeListener(eventName = '', listener = null) {
        if(!!eventName && listeners.hasOwnProperty(eventName)) {
            if(!!listener){
                for (let id in listeners[eventName]) {
                    if(listeners[eventName][id]['callback'] === listener) {
                        delete listeners[eventName][id];
                    }
                }
                return;
            }
            delete listeners[eventName];
            return;
        }

        for (let key in listeners) {
            delete listeners[key];
        }
    }

    unregisterComponent(uId) {
        for (let event in listeners) {
            for (let id in listeners[event]) {
                if(parseInt(id) === parseInt(uId)) {
                    delete listeners[event][id];
                }
            }
        }
    }

    emit(eventName, params = {}) {
        if(listeners.hasOwnProperty(eventName)) {
            Object.keys(listeners[eventName]).forEach(id => {
                if(listeners[eventName][id]['amount'] === 0) {
                    delete listeners[eventName][id];
                    return;
                }

                listeners[eventName][id]['callback'](params);

                if(listeners[eventName][id]['amount'] > 0) {
                    listeners[eventName][id]['amount'] -= 1;
                }
            })
        }
    }
}
