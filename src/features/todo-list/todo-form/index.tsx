import { Controller } from 'react-hook-form';

import { useTodoFormContext } from '@/contexts/todo-form-provider';
import {
  TodoFormSchemaKeys,
  TodoFormSchemaType,
} from '@/schemas/todo-form-schema';

import { FormFieldLayout } from './form-field-layout';
import { TodoFileUpload } from './todo-file-upload';

interface TodoFormProps {
  btnText?: string;
  handleSubmit: (formValues: TodoFormSchemaType) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  btnText = 'Submit',
  handleSubmit,
}) => {
  const { formHook } = useTodoFormContext();

  return (
    <div className="mx-auto w-full max-w-[500px] py-10">
      <FormFieldLayout
        id="todo-name"
        label="Todo Name"
        name={TodoFormSchemaKeys.NAME}
      >
        <input
          type="text"
          id="todo-name"
          placeholder="Todo Name"
          className="w-full rounded-md border border-neutral-400 bg-white p-3 text-base font-medium text-neutral-800 outline-none transition-all duration-500 placeholder:text-neutral-500 focus:border-blue-600 focus:shadow-md"
          {...formHook.register(TodoFormSchemaKeys.NAME)}
        />
      </FormFieldLayout>

      <FormFieldLayout
        id="todo-image"
        label="Todo Image"
        name={TodoFormSchemaKeys.IMAGE}
      >
        <Controller
          control={formHook.control}
          name={TodoFormSchemaKeys.IMAGE}
          render={({ field: { onChange, value } }) => (
            <TodoFileUpload onChange={onChange} value={value} />
          )}
        />
      </FormFieldLayout>

      <button
        type="button"
        onClick={formHook.handleSubmit(handleSubmit)}
        className="hover:shadow-form rounded-md bg-purple-600 px-8 py-2 text-base font-semibold text-white outline-none"
      >
        {btnText}
      </button>
    </div>
  );
};
