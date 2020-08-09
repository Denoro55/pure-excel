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

    on(eventType, fn) {
        this.$el.addEventListener(eventType, fn);
    }

    off(eventType, fn) {
        this.$el.removeEventListener(eventType, fn);
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    closest(selector) {
        return $(this.$el.closest(selector));
    }

    get data() {
        return this.$el.dataset;
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(props) {
        Object.entries(props).forEach(([key, value]) => {
            this.$el.style[key] = value;
        });
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
