import { appSchema, tableSchema } from '@nozbe/watermelondb';

import { DATABASE } from '@/constants/idb';

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
