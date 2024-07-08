import { TodoFormProvider } from '@/contexts/todo-form-provider';
import { TodoList } from '@/features/todo-list';

const Home = () => {
  return (
    <TodoFormProvider>
      <TodoList />
    </TodoFormProvider>
  );
};

export default Home;
