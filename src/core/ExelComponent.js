import {DomListener} from '@core/DomListener'

export class ExelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
    }

    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}
