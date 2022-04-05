import type { TodoState } from '@/pages/index/model';

export interface GlobalState {
  todos: TodoState;
  loading: DVALoading;
}

interface DVALoading {
  global: boolean;
  models: Record<string, boolean>;
  effects: Record<string, boolean>;
}
