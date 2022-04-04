import type { TodoState } from '@/pages/index/model';

export interface GlobalState {
  todos: TodoState;
  loading: any; //Todo find right type
}
