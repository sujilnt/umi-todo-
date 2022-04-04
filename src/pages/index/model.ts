import type { Put } from 'redux-saga/effects';

interface Todo {
  title: string;
  id: string;
  description: string;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoAction {
  GET_TODOS = 'GET_TODOS',
  SET_TODOS = 'SET_TODOS',
  RESET = 'RESET',
}

const initialState = {
  todos: undefined,
};

export default {
  namespace: 'todos',
  state: initialState,
  reducers: {
    [TodoAction.SET_TODOS](state: TodoState, { todos }: { todos: Todo[] }) {
      state.todos = todos;
    },
    [TodoAction.RESET]() {
      return initialState;
    },
  },
  effects: {
    *[TodoAction.GET_TODOS](
      _payload: any,
      { put, call }: { put: Put; call: Function },
    ) {
      const todos: Todo[] = [
        {
          title: 'test title',
          id: '1111',
          description: 'test description:',
        },
      ];

      yield put.resolve({
        type: TodoAction.SET_TODOS,
        todos,
      });
    },
  },
};
