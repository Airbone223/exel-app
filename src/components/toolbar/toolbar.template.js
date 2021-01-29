import {returnButtons, returnFonts, createColorBar} from '@/components/toolbar/arrays'

function toSelect(item) {
    const name = item.name ? item.name : item.value
    const meta = `
    value=${(item.value)}
    `
    return `<option ${meta} ${item.active ? 'selected' : ''}>${name}</option>`
}

function toButton(button) {
    const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
    `
    return `<div class="button ${button.active ? 'active' : ''}" ${meta}>
        <i class="material-icons" ${meta}>${button.icon}</i>
    </div>`
}


export function createToolbar(state) {
    const createFontsizes = (from, to) => {
        const fontSizes = []
        for (let i = from; i <= to; i++) {
            if (i % 2 === 0) {
                const size = {
                    name: i,
                    active: state['fontSize'] === `${i}px`,
                    value: `${i}px`
                }
                fontSizes.push(size)
            }
        }
        return fontSizes
    }

    const fontSizes = createFontsizes(8, 40)
    const fonts = returnFonts(state)
    const buttons = returnButtons(state)

    return `${buttons.map(toButton).join('')}
              <div class="excel__toolbar__container">
              <div class="button__text">
              <i class="material-icons">title</i>
              </div> 
              <select class="excel__toolbar__container__select__font" data-type="fontFamily">
              ${fonts.map(toSelect).join('')}
              </select>          
              <div class="button__text">
              <i class="material-icons">format_size</i>
              </div> 
              <select class="excel__toolbar__container__select__font__size" data-type="fontSize">
              ${fontSizes.map(toSelect).join('')}
              </select>
              </div>
              <div class="change__color__container">
              
                   <div class="button" data-change="changeTextColor"
                    style="border-color: ${state['color']}">
                   <i class="material-icons" data-change="changeTextColor">
                   format_color_text</i>
                   </div>
                   
                   <div class="button" data-change="changeBackgroundColor"
                    style="border-color: ${state['backgroundColor']}">
                   <i class="material-icons" data-change="changeBackgroundColor">
                   format_color_fill</i>                
                   </div>
                   
                    ${createColorBar()}
               </div>
              `
}


