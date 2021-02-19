import { EventService } from './services/EventService'

export default {
    install(Vue) {
        const eventBus = new EventService();

        Vue.mixin({
            beforeDestroy() {
                eventBus.unregisterComponent(this._uid);
            }
        })

        Vue.prototype.$addListener = eventBus.addListener;
        Vue.prototype.$removeListener = eventBus.removeListener;
        Vue.prototype.$emitEvent = eventBus.emit;
    }
};
