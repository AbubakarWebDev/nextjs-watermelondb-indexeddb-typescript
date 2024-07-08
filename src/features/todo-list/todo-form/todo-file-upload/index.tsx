import Image from 'next/image';
import { useRef } from 'react';

interface TodoFileUploadProps {
  value: Blob | null;
  onChange: (file: Blob | null) => void;
}

export const TodoFileUpload: React.FC<TodoFileUploadProps> = ({
  onChange,
  value,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) onChange(file);
  };

  return (
    <>
      <input
        type="file"
        id="todo-image"
        className="hidden"
        ref={fileInputRef}
        onChange={handleChange}
        accept=".jpg,.jpeg,.png,.webp"
        onClick={(e) => {
          e.currentTarget.value = '';
        }}
      />

      {value ? (
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-neutral-400 p-3">
          <Image
            width={250}
            height={250}
            alt="selected todo image"
            src={URL.createObjectURL(value)}
          />

          <button
            type="button"
            onClick={() => onChange(null)}
            className="flex w-full max-w-[150px] items-center justify-center rounded-md border border-neutral-400 bg-white py-1.5 text-base font-medium text-neutral-800 outline-none transition-all duration-500 focus:border-blue-600 focus:shadow-md"
          >
            Delete Image
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center rounded-md border border-neutral-400 bg-white py-3 text-base font-medium text-neutral-800 outline-none transition-all duration-500 focus:border-blue-600 focus:shadow-md"
        >
          Choose Todo Image
        </button>
      )}
    </>
  );
};
