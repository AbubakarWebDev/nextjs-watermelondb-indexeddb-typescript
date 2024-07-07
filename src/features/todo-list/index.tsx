'use client';

import { useState } from 'react';

import { useTodoFormContext } from '@/contexts/todo-form-provider';
import {
  TodoFormSchemaKeys,
  TodoFormSchemaType,
} from '@/schemas/todo-form-schema';
import { createTodo } from '@/services/idb-service';
import { convertBlobToBase64 } from '@/utils/image';

import { useGetTodos } from '@/hooks/idb/todos/get-todos';
import { TodoForm } from './todo-form';
import { EnhancedTodoListView } from './todo-list-view';

export const TodoList = () => {
  const [btnText, setBtnText] = useState('Submit');

  const todos = useGetTodos();
  const { formHook } = useTodoFormContext();

  const handleSubmit = async (formValues: TodoFormSchemaType) => {
    const base64Image = await convertBlobToBase64(
      formValues[TodoFormSchemaKeys.IMAGE]
    );

    try {
      await createTodo(formValues[TodoFormSchemaKeys.NAME], base64Image);
      formHook.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="pb-10 text-center text-3xl font-bold">
        Indexed DB Todo Application
      </h1>

      <EnhancedTodoListView todos={todos} />

      <TodoForm handleSubmit={handleSubmit} btnText={btnText} />
    </div>
  );
};
