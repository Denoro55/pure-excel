import DomListener from '@core/DomListener';

export default class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name;
        this.emitter = options.emitter;
        this.unsubsribers = [];

        this.prepare();
    }

    toHtml() {
        return '';
    }

    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    $on(event, fn) {
        const unsubscribe = this.emitter.subscribe(event, fn);
        this.unsubsribers.push(unsubscribe);
    }

    prepare() {
        // console.log('prepare');
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
        this.unsubsribers.forEach(unsub => unsub())
    }
}
