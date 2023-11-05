import { Entity } from './BaseEntity';

import { entity } from '../decorators/entity.decorator';
import { column } from '../decorators/property.decorator';

@entity({ schema: 'public', table: 'book' })
export class Book extends Entity {

  @column({ name: 'title' })
  title: string;

  @column({ name: 'author' })
  author: string;

  constructor(title: string, author: string) {
    super();
    this.title = title;
    this.author = author;
  }
}