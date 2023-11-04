import { Book } from './Entities';
import { ORM } from './ORM';

async function init() {
  const book = new Book('Clean code', 'Robert Martin');
  const orm = new ORM();
  await orm.save(book);
}

init();