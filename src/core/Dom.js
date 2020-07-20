class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html) {
        if (html) {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }
        this.$el.append(node);
    }

    clear() {
        this.$el.innerHTML = '';
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes)
    }
    return $(el);
};