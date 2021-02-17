const VueEventBus = {

    events: {},

    install(Vue) {
        Vue.prototype.$listen = (eventName, callback) => {
            if(!this.events.hasOwnProperty(eventName)) {
                this.events[eventName] = [];
            }

            this.events[eventName].push(callback);
        };



        Vue.prototype.$callEvent = (eventName, params = {}) => {
            if(this.events.hasOwnProperty(eventName)) {
                let events = [...this.events[eventName]].reverse();

                console.log(events, this.events[eventName])

                events.forEach(eventCallback => {
                    eventCallback(params);
                })
            }
        }
    }
}

export default VueEventBus;
