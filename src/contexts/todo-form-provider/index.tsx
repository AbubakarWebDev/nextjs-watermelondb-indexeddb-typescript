'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { TodoFormSchema, TodoFormSchemaType } from '@/schemas/todo-form-schema';

interface TodoFormProviderProps {
  children: React.ReactNode;
}

export const TodoFormProvider: React.FC<TodoFormProviderProps> = ({
  children,
}) => {
  const formHook = useForm<TodoFormSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(TodoFormSchema),
    defaultValues: {
      name: '',
    },
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useTodoFormContext = () => {
  const formHook = useFormContext<TodoFormSchemaType>();
  return useMemo(() => ({ formHook }), [formHook]);
};
