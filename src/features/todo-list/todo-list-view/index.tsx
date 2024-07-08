import { withObservables } from '@nozbe/watermelondb/react';

import { DATABASE } from '@/constants/idb';
import { Todo } from '@/libs/idb/models/todo-model';
import { deleteTodo } from '@/services/idb-service';
import { getErrorMessage } from '@/utils/common';

import { TodoRow } from './todo-row';
import { TodoTable } from './todo-table';

interface TodoListViewProps {
  todos: Todo[];
  handleUpdate: (id: string) => void;
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  todos,
  handleUpdate,
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(getErrorMessage(error));
    }
  };

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

const enhance = withObservables([DATABASE.TODO_MODEL], ({ todos }) => ({
  todos,
}));

export const EnhancedTodoListView = enhance(TodoListView);
