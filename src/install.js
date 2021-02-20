import { EventService } from './services/EventService'

const eventBus = new EventService();

export default {
    install(Vue) {

        Vue.mixin({
            beforeDestroy() {
                eventBus.unregisterComponent(this._uid);
            }
        })

        Vue.prototype.$addListener = function (eventName, listener, amount = -1) {
            return eventBus.addListener(this._uid, eventName, listener, amount);
        };

        Vue.prototype.$removeListener = (eventName = '', listener = null) => {
            return eventBus.removeListener(eventName, listener);
        };

        Vue.prototype.$emitEvent = (eventName, params = {}) => {
            return eventBus.emit(eventName, params)
        };
    }
};
