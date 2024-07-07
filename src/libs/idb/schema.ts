import { DATABASE } from '@/constants/idb';
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: DATABASE.TODO_TABLE,
      columns: [
        { name: 'image', type: 'string' },
        { name: 'name', type: 'string', isIndexed: true },
      ],
    }),
  ],
});
