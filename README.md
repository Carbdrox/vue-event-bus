# Vue.Js Event-Bus
A Vue.Js plugin which adds a global event bus to your vue-project.

## Installation

### Using npm

```
npm i @carbdrox/vue-event-bus --save
```

### Setup
Normally done inside `main.js`
```javascript
import VueEventBus from "@carbdrox/vue-event-bus";

Vue.use(VueEventBus);
```

### Usage
Inside your Components e.g. `App.vue`
```javascript
export default {
    created() {
        this.$addListener('event', () => {
            console.log('event Fired!')
        });
    },
    methods: {
        fireEvent() {
            this.$emitEvent('event');
        }
    }
}
```

### Interface
This Plugin provides the following interface   
`this.$addListener(eventName, listener, amount)`:  

| Parameter | Required | Description                                                                     |
|-----------|----------|---------------------------------------------------------------------------------|
| eventName | yes      | The name of the event to listen for.                                            |
| listener  | yes      | The function that will be executed when the event is fired.                     |
| amount    | no       | The number of times the listener should be executed. (empty or -1 for no limit) |

`this.$removeListener(eventName, listener)`:  

| Parameter | Required | Description                                                                                                                |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------|
| eventName | no       | The name of the event to remove. If no eventName specified, all events will be deleted                                     |
| listener  | no       | The function of the event to be deleted. If no function is specified, all functions of the specified event will be deleted |

`this.$emitEvent(eventName, params)`:  

| Parameter | Required | Description                                                                                                  |
|-----------|----------|--------------------------------------------------------------------------------------------------------------|
| eventName | yes      | The name of the event to be fired.                                                                           |
| params    | no       | The parameter to be passed to the event. If multiple parameters are required, they must be passed as object. |

### License

MIT

