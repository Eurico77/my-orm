import pgp from 'pg-promise';
import { Connection } from './contract/Connection';

export class PostgresConnection implements Connection {
  pgp: any;

  constructor() {
    this.pgp = pgp()('postgres://root:root@localhost:5432/orm');
  }

  query(statement: string, params: any): Promise<any> {
    return this.pgp.query(statement, params);
  }

  close(): Promise<void> {
    return this.pgp.$pool.end();
  }
}