import * as types from '../constants/ActionTypes'

export const addNote = (title, text) => ({ type: types.ADD_NOTE, title, text })
