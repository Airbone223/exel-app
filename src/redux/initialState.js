import {storage} from '@core/utils'

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    currentText: ''
}

export const initialState = storage('exel-state') ? storage('exel-state') : defaultState;
