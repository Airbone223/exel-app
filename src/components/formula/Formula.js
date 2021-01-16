import {ExelComponent} from '@core/ExelComponent'

export class Formula extends ExelComponent {
    static className = 'exel__formula'
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log('Formula onInput', event.target.textContent.trim())
        console.log(this.$root)
        this.destroy()
    }

    onClick(event) {
        console.log('Formula onClick', event)
    }
}
