import {storage} from '@core/utils'

export function toHTML(key) {
    const model = storage(key)
    const id = key.split(':')[1]
    return `
    
   <a href="#excel/${id}"> 
   <div class="db__tablesList__tableBox">
        <p class = "hidden">
        ${model.title}</br>
        ${new Date(model.openedDate).toLocaleDateString()}</br>
        ${new Date(model.openedDate).toLocaleTimeString()}</p>
      </div>
      </a>
    `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key)
    }
    return keys
}

export function createRecordsTable() {
    const keys = getAllKeys()
    if (!keys.length) {
        return ` <div class="db__list-header">
                 <h3>Вы пока не создали ни одной таблицы</h3>
                 </div>
                 `
    }
    return ` <div class="db__list-header">
             <h3>Сохраненные таблицы</h3>
             </div>
             <div class="db__tablesList">
             ${keys.map(toHTML).join('')}
              </div>
             `
}

