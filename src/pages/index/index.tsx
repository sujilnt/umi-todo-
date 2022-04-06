import styles from './style.less';
import { useDispatch, useSelector, Dispatch } from 'umi';
import { List, Checkbox, Button } from 'antd';
import { TodoAction } from '@/pages/index/model';
import { useEffect } from 'react';

import type { GlobalState } from '@/interfaces';
import { Todos } from '@/api';

interface DispatchActions {
  onStart: () => void;
  onCleanup: () => void;
  getTodos: () => void;
  onDeleteTodoItems: () => void;
  onSelectTodoItem: (id: string, value: boolean) => void;
}

function Index() {
  const { onStart, onCleanup, onSelectTodoItem, onDeleteTodoItems, getTodos } =
    getDispatchActions(useDispatch());
  const { todoState, isFetchingTodos, isDeletingTodos } = useSelector(
    (globalState: GlobalState) => ({
      isFetchingTodos:
        globalState.loading.effects[`todos/${TodoAction.GET_TODOS}`],
      isDeletingTodos:
        globalState.loading.effects[`todos/${TodoAction.DELETE_TODOS}`],
      todoState: globalState.todos,
    }),
  );

  const { todos, selectedTodoItem } = todoState;

  useEffect(() => {
    onStart();

    return onCleanup;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.operationButtons}>
        <Button onClick={getTodos} loading={isFetchingTodos}>
          refresh
        </Button>
        <Button
          onClick={onDeleteTodoItems}
          disabled={!selectedTodoItem?.size}
          loading={isDeletingTodos}
        >
          delete
        </Button>
      </div>
      <section className={styles.listContainer}>
        <List
          dataSource={todos}
          loading={isFetchingTodos}
          renderItem={(item: Todos) => (
            <div>
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                  avatar={
                    <Checkbox
                      checked={selectedTodoItem.has(item.id)}
                      onChange={(e) =>
                        onSelectTodoItem(item.id, e.target.checked)
                      }
                    />
                  }
                />
              </List.Item>
            </div>
          )}
        />
      </section>
    </div>
  );
}

function getDispatchActions(dispatch: Dispatch): DispatchActions {
  return {
    onStart() {
      dispatch({
        type: `todos/${TodoAction.GET_TODOS}`,
      });
    },
    onCleanup() {
      dispatch({
        type: `todos/${TodoAction.RESET}`,
      });
    },
    getTodos() {
      dispatch({
        type: `todos/${TodoAction.GET_TODOS}`,
      });
    },
    onSelectTodoItem(id, value: boolean) {
      dispatch({
        type: `todos/${TodoAction.ON_SELECTED_TODO_ITEM}`,
        id,
        value,
      });
    },
    onDeleteTodoItems() {
      dispatch({
        type: `todos/${TodoAction.DELETE_TODOS}`,
      });
    },
  };
}

Index.title = 'Home';

export default Index;
