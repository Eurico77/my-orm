import { Book } from './entities/Book';
import { ORM } from './infra/database/ORM';
import { PostgresConnection } from './infra/database/PostgresConnection';

async function init() {
  const connection = new PostgresConnection();
  const orm = new ORM(connection);
  const book = new Book('Clean code', 'Robert Martin');
  await orm.save(book);
  await connection.close();
}
init();