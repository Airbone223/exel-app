import {createToolbar} from '@/components/toolbar/toolbar.template'
import {$} from '@core/dom'
import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {defaultStyles} from '@/constans'

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click', 'change'],
      subscribe: ['currentStyles'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles)
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.change) {
      const className = $target.data.change === 'changeTextColor'
          ? 'container__text'
          : 'container__background'
      const removeClass = $target.data.change === 'changeTextColor'
          ? 'container__background'
          : 'container__text'
      const removeSelector = $target.data.change === 'changeTextColor'
          ? '[data-type="colorBarBackground"]'
          : '[data-type="colorBarText"]'
      const selector = $target.data.change === 'changeTextColor'
          ? '[data-type="colorBarText"]'
          : '[data-type="colorBarBackground"]'
      const removeTag = this.$root.find(removeSelector)
      removeTag.removeClass(removeClass)
      const root = this.$root.find(selector)
      root.toggle(className)
    }
    if ($target.data.color) {
      console.log($target.data.type)
      const value = $target.data.type === "backgroundColor"
          ? {backgroundColor: $target.data.color}
          :{color: $target.data.color}
      this.$emit('toolbar:applyStyle', value)
      const key = Object.keys(value)[0]
      this.setState({[key]: value[key]})
    }


    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)
      const key = Object.keys(value)[0]
      this.setState({[key]: value[key]})
    }
  }

  onChange(event) {
    let value
    const target = event.target
   if (target.dataset.type === 'fontFamily') {
     value = {
       fontFamily: event.target.value
     }
   } else if (event.target.dataset.type === 'fontSize') {
     value = {
       fontSize: event.target.value
     }
   }
    this.$emit('toolbar:applyStyle', value)
    const key = Object.keys(value)[0]
    this.setState({[key]: value[key]})
  }
}
