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

    text(text) {
        if (typeof text === 'string') {
            if (this.$el.tagName.toLowerCase() === 'input') {
                this.$el.value = text;
            } else {
                this.$el.textContent = text;
            }
        } else {
            if (this.$el.tagName.toLowerCase() === 'input') {
                return this.$el.value;
            }
            return this.$el.textContent;
        }
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

    find(selector) {
        return $(this.$el.querySelector(selector));
    }

    addClass(classname) {
        this.$el.classList.add(classname);
        return this;
    }

    removeClass(classname) {
        this.$el.classList.remove(classname);
        return this;
    }

    css(props) {
        Object.entries(props).forEach(([key, value]) => {
            this.$el.style[key] = value;
        });
    }

    focus() {
        this.$el.focus();
        return this;
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }
        this.$el.append(node);
    }

    id(parse) {
        const id = this.$el.dataset.id;
        if (parse) {
            const parsed = id.split(':');
            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return id;
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
