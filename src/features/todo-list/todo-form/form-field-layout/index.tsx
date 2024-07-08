import { ErrorMessage } from '@hookform/error-message';

import { useTodoFormContext } from '@/contexts/todo-form-provider';
import { cn } from '@/utils/cn';

interface FormFieldLayoutProps {
  id: string;
  name: string;
  label: string;
  className?: string;
  children: React.ReactElement;
}

export const FormFieldLayout: React.FC<FormFieldLayoutProps> = ({
  id,
  name,
  label,
  children,
  className,
}) => {
  const { formHook } = useTodoFormContext();
  const errors = formHook.formState.errors;

  return (
    <div className={cn('mb-5', className)}>
      <label
        htmlFor={id}
        className="mb-3 block text-base font-bold text-neutral-950"
      >
        {label}
      </label>

      {children}

      {errors && (
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <p className="pt-2 text-sm text-red-500">{message}</p>
          )}
        />
      )}
    </div>
  );
};
