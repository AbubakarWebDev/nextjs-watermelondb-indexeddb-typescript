import { DATABASE } from '@/constants/idb';

import { database } from '@/libs/idb/database';
import { Todo } from '@/libs/idb/models/todo-model';

export const createTodo = async (name: string, image: string) => {
  let newTodo: Todo | undefined;

  await database.write(async () => {
    newTodo = await database.get<Todo>(DATABASE.TODO_MODEL).create((todo) => {
      todo.name = name;
      todo.image = image;
    });
  });

  return newTodo;
};
