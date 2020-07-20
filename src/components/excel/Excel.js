import {$} from '@core/Dom'

export default class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components.forEach(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component();
            $el.html(component.toHtml());
            $root.append($el);
        });

        return $root;
    }

    render() {
        this.$el.clear();
        this.$el.append(this.getRoot());
    }
}