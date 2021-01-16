import {ExelComponent} from '@core/ExelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shuldResize} from '@/components/table/table.functions'

export class Table extends ExelComponent {
    static className = 'exel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(50)
    }

    onClick() {
        console.log('onClick')
    }

    onMousedown(event) {
        if (shuldResize(event)) {
        resizeHandler(this.$root, event)
}
    }
    }

