import {$} from '@core/dom'

export function resizeHandler($root, event) {
        const $resizer = $(event.target)
        const $parent = $resizer.closest('[data-type = "resizable"]')
        const parentsCoords = $parent.getCoords()
        const resizeType = $resizer.data.resize;
        const allColResize = $root.findAll(`[data-col="${$parent.data.col}"]`)

        document.onmousemove = e => {
            $resizer.css({opacity: 1})
            if (resizeType === 'col') {
                $root.css({cursor: 'col-resize'})
                const delta = e.pageX - parentsCoords.right
                const value = parentsCoords.width + delta
                $resizer.css({right: (-delta) + 'px', bottom: '-5000px'})

                document.onmouseup = () => {
                    document.onmousemove = null
                    $root.css({cursor: ''})
                    $resizer.css({opacity: 0, bottom: 0, right: 0})
                    $parent.css({width: value + 'px'})
                    allColResize
                        .forEach(el=> el.style.width = value + 'px')
                    document.onmouseup = null
                }
            }
            if (resizeType === 'row') {
                $root.css({cursor: 'row-resize'})
                const delta = e.pageY - parentsCoords.bottom
                const value = parentsCoords.height + delta
                $resizer.css({bottom: (-delta) + 'px', right: '-5000px'})
                document.onmouseup = () => {
                    document.onmousemove = null
                    $root.css({cursor: ''})
                    $resizer.css({opacity: 0, right: 0, bottom: 0})
                    $parent.css({height: value + 'px'})
                    document.onmouseup = null
                }
            }
        }
}

