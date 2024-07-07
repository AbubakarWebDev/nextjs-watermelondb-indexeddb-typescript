import { TodoFormProvider } from '@/contexts/todo-form-provider';
import { TodoList } from '@/features/todo-list';

export default function Home() {
  return (
    <TodoFormProvider>
      <TodoList />
    </TodoFormProvider>
  );
}
