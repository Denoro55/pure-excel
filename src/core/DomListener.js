import {capitalize} from './utils';

export default class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root element for DOM Listener')
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            if (!this[method]) {
                const name = this.name || '';
                throw new Error(
                    `Method ${method} is not implemented on ${name} Component`
                )
            }
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method]);
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            this.$root.off(listener, this[method]);
        })
    }
}

function getMethodName(method) {
    return 'on' + capitalize(method);
}
