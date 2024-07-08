import { Model } from '@nozbe/watermelondb';
import { date, readonly, text } from '@nozbe/watermelondb/decorators';

import { DATABASE } from '@/constants/idb';

export class Todo extends Model {
  static table = DATABASE.TODO_MODEL;

  @text('name') name?: string;

  @text('image') image?: string;

  @readonly @date('created_at') createdAt?: string;

  @readonly @date('updated_at') updatedAt?: string;
}
