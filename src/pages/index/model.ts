import { notification } from 'antd';
import api from '@/service/api';

import type { Put } from 'redux-saga/effects';
import type { GlobalState } from '@/interfaces';
import type { DeleteTodosByIdsRequest } from '@/api';

interface Todo {
  title: string;
  id: string;
  description: string;
}

export interface TodoState {
  todos?: Todo[];
  selectedTodoItem: Set<string | undefined>;
}

export enum TodoAction {
  GET_TODOS = 'GET_TODOS',
  SET_TODOS = 'SET_TODOS',
  ON_SELECTED_TODO_ITEM = 'ON_SELECT_TODO_ITEM',
  DELETE_TODOS = 'DELETE_TODOS',
  RESET = 'RESET',
}

const initialState = {
  todos: undefined,
  selectedTodoItem: new Set(),
};

export default {
  namespace: 'todos',
  state: initialState,
  reducers: {
    [TodoAction.SET_TODOS](state: TodoState, { todos }: { todos: Todo[] }) {
      state.todos = todos;
    },
    [TodoAction.ON_SELECTED_TODO_ITEM](
      state: TodoState,
      { id, value }: { id: string; value: boolean },
    ) {
      if (value) {
        state.selectedTodoItem.add(id);
      } else {
        state.selectedTodoItem.delete(id);
      }
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
      try {
        const todos: Todo[] = yield call(() => api.todos.getAllTodos());
        yield put.resolve({
          type: TodoAction.SET_TODOS,
          todos,
        });
      } catch (e) {
        console.error(e);
      }
    },
    *[TodoAction.DELETE_TODOS](
      _payload: any,
      { put, call, select }: { select: Function; put: Put; call: Function },
    ) {
      try {
        const selectedTodoItem: Set<string> = yield select(
          (globalState: GlobalState) => globalState.todos.selectedTodoItem,
        );
        const requestBody: DeleteTodosByIdsRequest = {
          requestBody: Array.from(selectedTodoItem),
        };

        yield call(() => api.todos.deleteTodosByIds(requestBody));
        yield put({
          type: TodoAction.GET_TODOS,
        });

        notification.success({
          message: 'todos deleted successfully',
        });
      } catch (e) {}
    },
  },
};
