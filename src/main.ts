import { Book } from './Entities';
import { ORM } from './ORM';
import { PostgresConnection } from './PostgresConnection';

async function init() {
  const connection = new PostgresConnection();
  const orm = new ORM(connection);
  const book = new Book('Clean code', 'Robert Martin');
  await orm.save(book);
  await connection.close();
}
init();