const tableColumns = ['#', 'Name', 'Image', 'Update', 'Edit'];

interface TodoTableProps {
  children: React.ReactNode;
}

export const TodoTable: React.FC<TodoTableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            {tableColumns.map((column) => (
              <th scope="col" key={column} className="px-6 py-4">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody id="table-body">{children}</tbody>
      </table>
    </div>
  );
};
