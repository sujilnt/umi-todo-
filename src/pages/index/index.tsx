import styles from './style.less';
import { useDispatch, useSelector, Dispatch } from 'umi';

import type { GlobalState } from '@/interfaces';
import { TodoAction, TodoState } from '@/pages/index/model';
import { useEffect } from 'react';

interface DispatchActions {
  onStart: () => void;
  onCleanup: () => void;
}

function Index(props) {
  const { todos, loading } = useSelector((globalState: GlobalState) => ({
    loading: globalState.loading,
    todos: globalState.todos,
  }));

  const { onStart, onCleanup } = getDispatchActions(useDispatch());

  useEffect(() => {
    onStart();

    return onCleanup;
  }, []);

  //Todo Remove
  console.log('todos', todos);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
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
  };
}

Index.title = 'Home';

export default Index;
