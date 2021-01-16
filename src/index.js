import './scss/index.scss'
import {Exel} from '@/components/exel/Exel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Table} from '@/components/table/Table'
import {Formula} from '@/components/formula/Formula'

const exel = new Exel('#app', {
    components: [Header, Toolbar, Formula, Table]
})


exel.render()
