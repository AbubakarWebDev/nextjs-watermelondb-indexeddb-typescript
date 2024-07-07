import { withObservables } from '@nozbe/watermelondb/react';

import { Todo } from '@/libs/idb/models/todo-model';

import { TodoRow } from './todo-row';
import { TodoTable } from './todo-table';

interface TodoListView {
  todos: Todo[];
}

export const TodoListView: React.FC<TodoListView> = ({ todos }) => {
  const handleDelete = (id: string) => {};
  const handleUpdate = (id: string) => {};

  return (
    <TodoTable>
      {todos.map((todo, index) => (
        <TodoRow
          key={todo.id}
          index={index + 1}
          name={todo.name ?? ''}
          image={todo.image ?? ''}
          handleDelete={() => handleDelete(todo.id)}
          handleUpdate={() => handleUpdate(todo.id)}
        />
      ))}
    </TodoTable>
  );
};

const enhance = withObservables(['todos'], ({ todos }) => ({
  todos,
}));

export const EnhancedTodoListView = enhance(TodoListView);
