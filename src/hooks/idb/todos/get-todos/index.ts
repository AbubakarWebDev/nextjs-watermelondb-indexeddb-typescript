import { Observable } from '@nozbe/watermelondb/utils/rx';
import { useEffect, useState } from 'react';

import { database } from '@/libs/idb/database';
import { Todo } from '@/libs/idb/models/todo-model';

const defaultTodoObservable = new Observable<Todo[]>((observer) => {
  observer.next([]);
});

export const useGetTodos = () => {
  const [todos, setTodos] = useState<Observable<Todo[]>>(defaultTodoObservable);

  useEffect(() => {
    setTodos(database.get<Todo>('todos').query().observe());
  }, []);

  return todos;
};
