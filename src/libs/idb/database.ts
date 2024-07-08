import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';

import { DATABASE } from '@/constants/idb';

import { Todo } from './models/todo-model';
import { schema } from './schema';

const adapter = new LokiJSAdapter({
  schema,
  useWebWorker: false,
  dbName: DATABASE.TODO_DB,
  useIncrementalIndexedDB: true,

  onQuotaExceededError: (_error) => {
    // Browser ran out of disk space -- offer the user to reload the app or log out
  },
  onSetUpError: (_error) => {
    // Database failed to load -- offer the user to reload the app or log out
  },
  extraIncrementalIDBOptions: {
    onDidOverwrite: () => {
      // Called when this adapter is forced to overwrite contents of IndexedDB.
      // This happens if there's another open tab of the same app that's making changes.
      // Try to synchronize the app now, and if user is offline, alert them that if they close this
      // tab, some data may be lost
    },
    onversionchange: () => {
      // database was deleted in another browser tab (user logged out), so we must make sure we delete
      // it in this tab as well - usually best to just refresh the page
      window.location.reload();
    },
  },
});

// The rest is the same!

export const database = new Database({
  adapter,
  modelClasses: [Todo],
});
