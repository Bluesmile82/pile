import { ADD_NOTE } from '../constants/ActionTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          title: action.title,
          text: action.text
        },
        ...state
      ]

    default:
      return state
  }
}
