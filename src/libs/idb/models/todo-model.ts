import { Model } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

import { DATABASE } from '@/constants/idb';

export class Todo extends Model {
  static table = DATABASE.TODO_MODEL;

  @text('name') name?: string;

  @text('image') image?: string;
}
