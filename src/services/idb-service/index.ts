import { DATABASE } from '@/constants/idb';
import { database } from '@/libs/idb/database';
import { Todo } from '@/libs/idb/models/todo-model';

interface TodoPayload {
  id: string;
  name: string;
  image: string;
}

export const getTodo = async (id: string) => {
  const foundTodo = await database.get<Todo>(DATABASE.TODO_MODEL).find(id);
  return foundTodo;
};

export const createTodo = async ({ name, image }: Omit<TodoPayload, 'id'>) => {
  let newTodo: Todo | undefined;

  await database.write(async () => {
    newTodo = await database.get<Todo>(DATABASE.TODO_MODEL).create((todo) => {
      todo.name = name;
      todo.image = image;
    });
  });

  return newTodo;
};

export const updateTodo = async ({ id, name, image }: TodoPayload) => {
  let newTodo: Todo | undefined;
  const foundTodo = await database.get<Todo>(DATABASE.TODO_MODEL).find(id);

  await database.write(async () => {
    newTodo = await foundTodo.update((todo) => {
      todo.name = name;
      todo.image = image;
    });
  });

  return newTodo;
};

export const deleteTodo = async (id: string) => {
  const foundTodo = await database.get<Todo>(DATABASE.TODO_MODEL).find(id);

  await database.write(async () => {
    await foundTodo.destroyPermanently();
  });
};
