import { ADDED, ALLCLEARED, ALLCOMPLETEDED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text:payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      const { todoId, color } =payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                };
            });

    case DELETED:
      return state.filter((todo) => todo.id !== payload);

    case ALLCOMPLETEDED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case ALLCLEARED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
