import {$} from '@core/Dom'
import Emitter from '@core/Emitter';

export default class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        const componentOptions = {
            emitter: this.emitter
        };

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el, componentOptions);
            // if (component.name) {
            //     window['c' + component.name] = component
            // }
            $el.html(component.toHtml());
            $root.append($el);
            return component;
        });

        return $root;
    }

    render() {
        this.$el.clear();
        this.$el.append(this.getRoot());

        this.components.forEach(c => c.init());
    }

    destroy() {
        this.components.forEach(c => c.destroy());
    }
}
