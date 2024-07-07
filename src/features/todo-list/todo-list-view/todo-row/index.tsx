import Image from 'next/image';

interface TodoRowProps {
  name: string;
  image: string;
  index: number;
  handleDelete: () => void;
  handleUpdate: () => void;
}

export const TodoRow: React.FC<TodoRowProps> = ({
  name,
  image,
  index,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4">{name}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <Image width={100} height={100} alt="Todo Attachment" src={image} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <button
          type="button"
          onClick={handleUpdate}
          className="rounded-lg bg-blue-600 px-4 py-2 text-neutral-50"
        >
          Update
        </button>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-neutral-50"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
