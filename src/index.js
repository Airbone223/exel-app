import {Router} from '@core/routes/Router'
import './scss/index.scss'
import {DashboardPage} from '@core/pages/DashboardPage'
import {ExcelPage} from '@core/pages/ExcelPage'

new Router('#app', {
    dashboard: DashboardPage,
    excel: ExcelPage
})


