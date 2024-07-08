'use client';

import { useState } from 'react';

import { useTodoFormContext } from '@/contexts/todo-form-provider';
import { useGetTodos } from '@/hooks/idb/todos/get-todos';
import {
  TodoFormSchemaKeys,
  TodoFormSchemaType,
} from '@/schemas/todo-form-schema';
import { createTodo, getTodo, updateTodo } from '@/services/idb-service';
import { getErrorMessage } from '@/utils/common';
import { convertBase64ToBlob, convertBlobToBase64 } from '@/utils/image';

import { TodoForm } from './todo-form';
import { EnhancedTodoListView } from './todo-list-view';

const BTN_TEXT = {
  CREATE: 'Create Todo',
  UPDATE: 'Update Todo',
} as const;

export const TodoList = () => {
  const [todoId, setTodoId] = useState<string>('');
  const [btnText, setBtnText] = useState<string>(BTN_TEXT.CREATE);

  const todos = useGetTodos();
  const { formHook } = useTodoFormContext();

  const handleSubmit = async (formValues: TodoFormSchemaType) => {
    const base64Image = await convertBlobToBase64(
      formValues[TodoFormSchemaKeys.IMAGE]
    );

    try {
      if (btnText === BTN_TEXT.CREATE) {
        await createTodo({
          name: formValues[TodoFormSchemaKeys.NAME],
          image: base64Image,
        });
      } else {
        await updateTodo({
          id: todoId,
          name: formValues[TodoFormSchemaKeys.NAME],
          image: base64Image,
        });
      }

      formHook.reset();
      setBtnText(BTN_TEXT.CREATE);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(getErrorMessage(error));
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const todo = await getTodo(id);
      const todoImageBlob = await convertBase64ToBlob(todo?.image ?? '');

      formHook.setValue(TodoFormSchemaKeys.NAME, todo?.name ?? '');
      formHook.setValue(TodoFormSchemaKeys.IMAGE, todoImageBlob);

      setBtnText(BTN_TEXT.UPDATE);
      setTodoId(id);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(getErrorMessage(error));
    }
  };

  return (
    <div className="p-10">
      <h1 className="pb-10 text-center text-3xl font-bold">
        Indexed DB Todo Application
      </h1>

      <EnhancedTodoListView todos={todos} handleUpdate={handleUpdate} />

      <TodoForm handleSubmit={handleSubmit} btnText={btnText} />
    </div>
  );
};
