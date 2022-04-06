import moment from 'moment';

import type { Todos } from '@/api';
import type { Request, Response } from 'express';

let todos: Todos[] = [
  {
    id: '1',
    title: 'waking early',
    description: 'waking early and going to chruch',
    uploadedTime: moment('06:00 am', 'HH:mm').toDate(),
  },
  {
    id: '2',
    title: 'polish brand ideas',
    description: 'Polishing the brand ideas for the moble app',
    uploadedTime: moment('07:00 am', 'HH:mm').toDate(),
  },
  {
    id: '3',
    title: 'office time at 9.00',
    description: 'Must reach to office on time for morning meeting',
    uploadedTime: moment('09:00 am', 'HH:mm').toDate(),
  },
  {
    id: '4',
    title: 'lunch break at noon',
    description: 'Having the lunch before 2.00pm',
    uploadedTime: moment('1:00 pm', 'HH:mm').toDate(),
  },
  {
    id: '5',
    title: 'leaving home',
    description: 'catching bus at 5.00',
    uploadedTime: moment('5:00 pm', 'HH:mm').toDate(),
  },
];

export default {
  'GET /todos': (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(todos);
    }, 3000);
  },

  'DELETE /todos': (request: Request, response: Response) => {
    setTimeout(() => {
      const todoIds = request.body;
      /**
       *  when deleting todos, mutating the todos array because
       *  when re-fetched get todos endpoint after deleting the todos, the deleted
       *  todos are removed.
       */
      todos = todos.filter(({ id }) => !todoIds.includes(id));

      response.sendStatus(200);
    }, 3000);
  },
};
