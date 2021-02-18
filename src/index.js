import { EventService } from './services/EventService'

export default {
    install(Vue) {
        const eventBus = new EventService();

        Vue.prototype.$listen = eventBus.listen;
        Vue.prototype.$emitEvent = eventBus.emit;
    }
};
