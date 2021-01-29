import {Page} from '@core/pages/Page'
import {$} from '@core/dom'
import {createRecordsTable} from '@core/pages/dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString()
        return $.create('div', 'db').html(`
        <div class="db__header">
      <h1>Excel Панель управления</h1>
    </div>
    <div class="db__new">
           <a href="#excel/${now}" class="db__create">
          Новая <br /> Таблица
        </a>
         </div>
  ${createRecordsTable()}
        `)
    }
}
