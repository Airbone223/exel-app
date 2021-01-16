class Dom {
    constructor(selector) {
// eslint-disable-next-line max-len
        this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
        this.$$listener = {}
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$$listener[eventType] = callback
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType) {
        this.$el.removeEventListener(eventType, this.$$listener[eventType])
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    get data() {
        return this.$el.dataset
    }

    css(styles = {}) {
        Object
            .keys(styles)
            .forEach(key => {
            this.$el.style[key] = styles[key]
        })
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
