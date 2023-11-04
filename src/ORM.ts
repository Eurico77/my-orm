import { Entity } from './BaseEntity';

export interface Connection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>
}

export class ORM {

  constructor(readonly connection: Connection) { }

  async save(entity: Entity) {
    const params = [];
    this.connection.query(`insert into ${entity.schema}.${entity.table}`, params);

  }
}