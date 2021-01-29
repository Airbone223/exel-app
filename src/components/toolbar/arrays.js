export function returnFonts(state) {
    const fonts = [
        {
            active: state['fontFamily'] === 'Roboto',
            value: 'Roboto'
        },
        {
            active: state['fontFamily'] === 'Oswald',
            value: 'Oswald'
        },
        {
            active: state['fontFamily'] === 'Lobster',
            value: 'Lobster'
        },
        {
            active: state['fontFamily'] === 'Comfortaa',
            value: 'Comfortaa'
        },
        {

            active: state['fontFamily'] === 'Pacifico',
            value: 'Pacifico'
        },
        {
            active: state['fontFamily'] === 'Caveat',
            value: 'Caveat'
        },
        {
            active: state['fontFamily'] === 'Montserrat',
            value: 'Montserrat'
        },
        {
            active: state['fontFamily'] === 'Raleway',
            value: 'Raleway'
        },
        {
            active: state['fontFamily'] === 'Ubuntu',
            value: 'Ubuntu'
        },
        {
            active: state['fontFamily'] === 'Merriweather',
            value: 'Merriweather'
        },
        {
            active: state['fontFamily'] === 'Lora',
            value: 'Lora'
        }
    ]
    return fonts
}

export function returnButtons(state) {
    const buttons = [
        {
            icon: 'format_align_left',
            active: state['textAlign'] === 'left',
            value: {textAlign: 'left'}
        },
        {
            icon: 'format_align_center',
            active: state['textAlign'] === 'center',
            value: {textAlign: state['textAlign'] === 'center' ? 'left' : 'center'}
        },
        {
            icon: 'format_align_right',
            active: state['textAlign'] === 'right',
            value: {textAlign: state['textAlign'] === 'right' ? 'left' : 'right'}
        },
        {
            icon: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
        },
        {
            icon: 'format_italic',
            active: state['fontStyle'] === 'italic',
            value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
        },
        {
            icon: 'format_underlined',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
        },
        {
            icon: 'format_strikethrough',
            active: state['textDecoration'] === 'line-through',
            value: {textDecoration: state['textDecoration'] === 'line-through' ? 'none' : 'line-through'}
        },
        {
            icon: 'horizontal_rule',
            active: state['textDecoration'] === 'overline',
            value: {textDecoration: state['textDecoration'] === 'overline' ? 'none' : 'overline'}
        }
    ]
    return buttons
}

export function createColorBar() {
    const colors = ['#FF0000', '#BF3030', '#A60000', '#FF4040', '#FF7373',
        '#FF7400', '#BF7130', '#A64B00', '#FF9640', '#FFB273',
        '#FFFF00', '#BFBF30', '#A6A600', '#FFFF40', '#FFFF73',
        '#00CC00', '#269926', '#008500', '#39E639', '#67E667',
        '#009999', '#1D7373', '#33CCCC', '#5CCCCC', '#006363',
        '#133CAC', '#2B4281', '#062270', '#476DD5', '#6D89D5',
        '#7109AA', '#5F2580', '#48036F', '#9F3ED5', '#AD66D5',
        '#ffffff', '#b3b3b3', '#8c8c8c', '#000000', '#4d4d4d']
    const textColors = colors.map(c => {
        return `<div class = "box"
        style="background-color: ${c}" 
        data-color="${c}" 
        data-type="color">
        </div>`
    }).join('')
    const backgroundColors = colors.map(c => {
        return `<div class = "box"
         style="background-color: ${c}"
         data-color="${c}"
         data-type="backgroundColor">
        </div>`
    }).join('')
    return `<div class = "container" data-type = "colorBarText">
        ${textColors}
    </div>
        <div class = "container" data-type = "colorBarBackground">
        ${backgroundColors}
    </div>`
}
