import dvaLogger from 'dva-logger';
import { enableMapSet } from 'immer';

enableMapSet();

export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  plugins: [dvaLogger()],
};
