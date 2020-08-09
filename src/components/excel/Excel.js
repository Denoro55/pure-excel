import {$} from '@core/Dom'

export default class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            if (component.name) {
                window['c' + component.name] = component
            }
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

        console.log(this.components)
    }
}
